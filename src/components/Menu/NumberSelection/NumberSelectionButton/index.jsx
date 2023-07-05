import React from "react";

import "./NumberSelectionButton.css"

export function NumberSelectionButton({ number }) {
	return <button className="number-selection-button">{number}</button>;
}
