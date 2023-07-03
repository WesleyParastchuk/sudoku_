import React, { useState } from "react";
import CellSpace from "../CellSpace";

import "./SudokuMatriz.css";

import { game } from "../../../App";

const SudokuMatriz = (props) => {
	return (
		<>
			{props.thisGame.map((line, row) => {
				return line.map((cell, column) => {
					return (
						<CellSpace
							row={row}
							column={column}
							onClick={(event) => game.cellClick(event)}
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
