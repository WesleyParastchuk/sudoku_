import React, { useState, useContext } from "react";
import { GameContext } from "../../../../contexts/GameContext/GameContext";

import "./CellSpace.css";

import { game } from "../../../../App";
import { calcBlockColumn, calcBlockRow } from "../../../../script/manipulableFuntions";

export function CellSpace({ cell, row, column }) {
	const { clickedButton, setClickedButton, initialGame } =
		useContext(GameContext);

	return (
		<button
			type="button"
			className="cell-space"
			rowblock={calcBlockRow(row)}
			columnblock={calcBlockColumn(column)}
			row={row}
			column={column}
			onClick={event => {
				event.preventDefault();
				setClickedButton([
					event.target.getAttribute("row"),
					event.target.getAttribute("column"),
				]);
			}}
			style={{
				backgroundColor:
					clickedButton[0] == row && clickedButton[1] == column
						? "orange"
						: "transparent",
				fontWeight: initialGame[row][column] ? "800" : "400",
			}}
		>
			{cell ? cell : ""}
		</button>
	);
}
