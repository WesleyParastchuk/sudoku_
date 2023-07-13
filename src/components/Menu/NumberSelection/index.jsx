import React, { useContext, useEffect } from "react";
import { NumberSelectionButton } from "./NumberSelectionButton";
import { GameContext } from "../../../contexts/GameContext/GameContext";

import "./NumberSelection.css";

import { game } from "../../../App";

import {
	listThisUpTo,
	noteIsEmpty,
	isNoteCell,
} from "../../../script/manipulableFuntions";
import { totalBlocks, emptyNote } from "../../../script/variables";

export function NumberSelection() {
	const { actGame, clickedButton, setClickedButton, pauseMove, isNote } =
		useContext(GameContext);
	const numbers = listThisUpTo(1, totalBlocks);

	function setMoveClick(row, column) {
		const button = {
			row: Number(clickedButton.row) + row,
			column: Number(clickedButton.column) + column,
		};
		if (
			button.row >= 0 &&
			button.row <= totalBlocks - 1 &&
			button.column >= 0 &&
			button.column <= totalBlocks - 1
		) {
			setClickedButton({ row: button.row, column: button.column });
		}
	}

	async function setThisNote(value) {
		let newValue = [];
		const actualValue = await game.actualGame[clickedButton.row][
			clickedButton.column
		];
		if (isNoteCell(actualValue)) {
			newValue.push(...actualValue);
			if (actualValue.includes(value)) {
				newValue[value - 1] = "";
				if (noteIsEmpty(newValue)) {
					newValue = "";
				}
			} else {
				newValue[value - 1] = value;
			}
		} else {
			newValue.push(...emptyNote);
			newValue[value - 1] = value;
		}
	}

	async function verifyAndSetNewValue(value) {
		value = Number(value);
		let newValue = [];
		if (isNote) {
			newValue = setThisNote(value);
		} else {
			newValue = value;
		}
		await game.setNewCell(newValue, clickedButton).then(() => actGame());
	}

	async function handleClickEvent(event) {
		if (pauseMove) return;
		if (numbers.includes(Number(event.key))) {
			await verifyAndSetNewValue(event.key);
		} else if (event.key == "ArrowUp") {
			setMoveClick(-1, 0);
		} else if (event.key == "ArrowDown") {
			setMoveClick(1, 0);
		} else if (event.key == "ArrowRight") {
			setMoveClick(0, 1);
		} else if (event.key == "ArrowLeft") {
			setMoveClick(0, -1);
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", handleClickEvent);

		return () => {
			document.removeEventListener("keydown", handleClickEvent);
		};
	}, [clickedButton, pauseMove, isNote]);

	return (
		<div className="number-selection-container">
			{numbers.map(number => {
				return (
					<NumberSelectionButton
						key={number}
						number={number}
						onClick={verifyAndSetNewValue}
					/>
				);
			})}
		</div>
	);
}
