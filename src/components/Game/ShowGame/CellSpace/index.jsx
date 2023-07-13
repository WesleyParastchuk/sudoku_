import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../../../../contexts/GameContext/GameContext";

import "./CellSpace.css";

import { game } from "../../../../App";
import {
	calcBlockColumn,
	calcBlockRow,
} from "../../../../script/manipulableFuntions";

export function CellSpace({ cell, row, column }) {
	const { clickedButton, setClickedButton, initialGame } =
		useContext(GameContext);

	const [actualStyle, setActualStyle] = useState("cell-space number");

	useEffect(() => {
		if (typeof cell == "object") {
			setActualStyle("cell-space note");
		} else {
			setActualStyle("cell-space number");
		}
	}, [cell]);

	return (
		<button
			type="button"
			className={actualStyle}
			rowblock={calcBlockRow(row)}
			columnblock={calcBlockColumn(column)}
			row={row}
			column={column}
			onClick={event => {
				event.preventDefault();
				setClickedButton({
					row: event.target.getAttribute("row"),
					column: event.target.getAttribute("column"),
				});
			}}
			style={{
				backgroundColor:
					clickedButton.row == row && clickedButton.column == column
						? "orange"
						: "transparent",
				fontWeight: initialGame[row][column] ? "800" : "400",
			}}
		>
			{typeof cell == "object"
				? cell.map((oneCell, index) => {
						return (
							<div
								className="mini-cell"
								key={`${(row, column, index)}`}
								onClick={async event => {
									await setClickedButton({
										row: await event.target.parentNode.getAttribute(
											"row"
										),
										column: await event.target.parentNode.getAttribute(
											"column"
										),
									});
								}}
							>
								{oneCell ? oneCell : ""}
							</div>
						);
				  })
				: cell
				? cell
				: ""}
		</button>
	);
}
