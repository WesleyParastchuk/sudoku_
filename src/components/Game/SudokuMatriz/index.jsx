import React, { useState } from "react";
import CellSpace from "./CellSpace";

import "./SudokuMatriz.css";

import { game } from "../../../App";

const SudokuMatriz = (props) => {
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

	return (
		<>
			{props.thisGame.map((line, row) => {
				return line.map((cell, column) => {
					return (
						<CellSpace
							row={row}
							column={column}
							onClick={(event) =>
								setFocusLoc(convertEvent(event))
							}
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
