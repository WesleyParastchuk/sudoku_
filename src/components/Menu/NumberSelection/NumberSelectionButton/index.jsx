import React, { useContext, useEffect } from "react";

import "./NumberSelectionButton.css";

export function NumberSelectionButton({ number, onClick }) {
	return (
		<button
			className="number-selection-button"
			onClick={() => {
				onClick(number);
			}}
		>
			{number}
		</button>
	);
}
