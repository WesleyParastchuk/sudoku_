import React, { useState } from "react";
import CellSpace from "./CellSpace";

import "./SudokuMatriz.css";

import { game } from "../../../App";

const SudokuMatriz = props => {
	function setFocusLoc(newLoc) {
		game.cellClicked = newLoc;
		props.setClickLoc(newLoc);
	}

	function convertEvent(event) {
		return [
			event.target.getAttribute("row"),
			event.target.getAttribute("column"),
		];
	}

	document.addEventListener("keyup", event => {
		const pos = game.cellClicked;
		if (event.key == "ArrowLeft")
			if (pos[1] > 1) {
				setFocusLoc([pos[0], pos[1] - 1]);
				return;
			}
		if (event.key == "ArrowRight")
			if (pos[1] < 8) {
				setFocusLoc([pos[0], pos[1] + 1]);
				return;
			}
		if (event.key == "ArrowUp")
			if (pos[0] > 0) {
				setFocusLoc([pos[0] + 1, pos[1]]);
				return;
			}
		if (event.key == "ArrowDown")
			if (pos[0] < 8) {
				setFocusLoc([pos[0] - 1, pos[1]]);
				return;
			}
		return;
	});

	return (
		<>
			{props.thisGame.map((line, row) => {
				return line.map((cell, column) => {
					return (
						<CellSpace
							row={row}
							column={column}
							onClick={event => setFocusLoc(convertEvent(event))}
							key={`${row} ${column}`}
							innerHTML={cell}
							clickLoc={props.clickLoc}
						/>
					);
				});
			})}
		</>
	);
};

export default SudokuMatriz;
