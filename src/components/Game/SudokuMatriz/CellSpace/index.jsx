import React from "react";

import "./CellSpace.css";

const CellSpace = props => {
	const blockrow = Math.floor(props.row / 3);
	const blockcolumn = Math.floor(props.column / 3);
	return (
		<button
			blockrow={blockrow}
			blockcolumn={blockcolumn}
			className="cell"
			row={props.row}
			column={props.column}
			onClick={props.onClick}
			blocktype={(blockrow + blockcolumn) % 2 ? "even" : "odd"}
			style={props.style}
		>
			{props.innerHTML}
		</button>
	);
};

export default CellSpace;
