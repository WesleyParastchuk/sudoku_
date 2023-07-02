import React from "react";
import CellSpace from "../CellSpace";

import "./SudokuMatriz.css"

import Sudoku from "../../../script/gameController";

let game = new Sudoku();

const SudokuMatriz = () => {
	return (
		<>
			{game.actualGame.map((line, row) => {
				return line.map((cell, column) => {
					return (
						<CellSpace
							row={row}
							column={column}
							blockRow={Math.floor(row / 3)}
							blockColumn={Math.floor(column / 3)}
							onClick={() => game.cellClick(event)}
							key={`${row} ${column}`}
							innerHTML={cell}
						/>
					);
				});
			})}
		</>
	);
};

export default SudokuMatriz;
