import React, { useContext, useEffect } from "react";
import { NumberSelectionButton } from "./NumberSelectionButton";

import "./NumberSelection.css";

import { game } from "../../../App";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import { listThisUpTo } from "../../../script/manipulableFuntions";
import { totalBlocks, emptyNote } from "../../../script/variables";

export function NumberSelection() {
	const { actGame, clickedButton, setClickedButton, pauseMove, isNote } =
		useContext(GameContext);
	const numbers = listThisUpTo(1, totalBlocks);

	function setMoveClick(row, column) {
		const [thisRow, thisColumn] = clickedButton;
		const button = [Number(thisRow) + row, Number(thisColumn) + column];
		if (
			button[0] >= 0 &&
			button[0] <= 8 &&
			button[1] >= 0 &&
			button[1] <= 8
		) {
			setClickedButton(button);
		}
	}

	function noteIsEmpty(note) {
		let isEmpty = true;
		note.forEach(space => {
			if (space) isEmpty = false;
		});
		return isEmpty;
	}

	async function verifyAndSetNumberOrNote(number){
		number = Number(number)
		let newValue = [];
			if (isNote) {
				const actualValue = await game.actualGame[clickedButton[0]][
					clickedButton[1]
				];
				if (typeof actualValue == "object") {
					newValue.push(...actualValue);
					if (actualValue.includes(number)) {
						newValue[number - 1] = "";
						console.log(newValue)
						if (noteIsEmpty(newValue)) {
							newValue = "";
						}
					} else {
						newValue[number - 1] = number;
					}
				} else {
					newValue.push(...emptyNote);
					newValue[number - 1] = number;
				}
			} else {
				newValue = number;
			}
			await game
				.setNewCell(newValue, clickedButton)
				.then(() => actGame());
	}

	async function handleClickEvent(event) {
		if (pauseMove) return;
		if (numbers.includes(Number(event.key))) {
			await verifyAndSetNumberOrNote(event.key);
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
				return <NumberSelectionButton key={number} number={number} onClick={verifyAndSetNumberOrNote}/>;
			})}
		</div>
	);
}
