import React, { useState } from "react";

import "./CellSpace.css";

import { game } from "../../../../App";

export function CellSpace({ cell, row, column }) {
	const [isFocus, setIsFocus] = useState(false);

	function addFocus(event) {
		game.cellClick(event);
		setIsFocus(true);
	}

	function deleteFocus() {
		setIsFocus(false);
	}

	return (
		<button
			type="button"
			className="cell-space"
			rowblock={Math.floor(row / 3)}
			columnblock={Math.floor(column / 3)}
			row={row}
			column={column}
			onBlur={() => deleteFocus()}
			onFocus={(event) => addFocus(event)}
			style={{ backgroundColor: isFocus ? "orange" : "transparent" }}
		>
			{cell ? cell : ""}
		</button>
	);
}
