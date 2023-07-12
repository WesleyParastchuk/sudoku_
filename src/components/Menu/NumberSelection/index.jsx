import React, { useContext, useEffect } from "react";
import { NumberSelectionButton } from "./NumberSelectionButton";

import "./NumberSelection.css";

import { game } from "../../../App";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import { listThisUpTo } from "../../../script/manipulableFuntions";
import { totalBlocks } from "../../../script/variables";

export function NumberSelection() {
	const { actGame, clickedButton, setClickedButton, pauseMove} =
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

	async function handleClickEvent(event) {
		if (pauseMove) return;
		if (numbers.includes(Number(event.key))) {
			await game
				.setNewCell(event.key, clickedButton)
				.then(() => actGame());
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
	}, [clickedButton, pauseMove]);

	return (
		<div className="number-selection-container">
			{numbers.map(number => {
				return <NumberSelectionButton key={number} number={number} />;
			})}
		</div>
	);
}

//manter foco na peça que está no meio