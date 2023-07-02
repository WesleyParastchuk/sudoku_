import React from "react";

import "./CellSpace.css";

const CellSpace = props => {
	return (
		<button
			blockrow={props.blockRow}
			blockcolumn={props.blockColumn}
			className="cell"
			row={props.row}
			column={props.column}
			onClick={props.onClick}
		>
			{props.innerHTML}
		</button>
	);
};

export default CellSpace;
