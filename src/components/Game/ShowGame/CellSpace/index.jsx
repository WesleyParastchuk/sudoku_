import React from "react";

import "./CellSpace.css";

export function CellSpace({ cell, row, column }) {
	return (
		<button
			type="button"
			className="cell-space"
			rowblock={Math.floor(row / 3)}
			columnblock={Math.floor(column / 3)}
			row={row}
			column={column}
		>
			{cell}
		</button>
	);
}
