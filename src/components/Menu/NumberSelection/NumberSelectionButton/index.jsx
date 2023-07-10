import React, { useContext } from "react";

import "./NumberSelectionButton.css";

import { game } from "../../../../App";
import { GameContext } from "../../../../contexts/GameContext/GameContext";

export function NumberSelectionButton({ number }) {
	const { actGame } = useContext(GameContext);

	function setNewSpace(number) {
		if (game.cellClicked && game.cellClicked != undefined) {
			game.setNewCell(number);
			actGame();
		}
	}

	return (
		<button
			className="number-selection-button"
			onClick={() => setNewSpace(number)}
		>
			{number}
		</button>
	);
}
