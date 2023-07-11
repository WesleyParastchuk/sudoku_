import React, { useContext, useEffect } from "react";

import "./NumberSelectionButton.css";

import { game } from "../../../../App";
import { GameContext } from "../../../../contexts/GameContext/GameContext";

export function NumberSelectionButton({ number }) {
	const { actGame, clickedButton } = useContext(GameContext);

	async function setNewSpace(number) {
		await game.setNewCell(number, clickedButton).then(() => actGame());
	}

	return (
		<button
			className="number-selection-button"
			onClick={() => {
				setNewSpace(number);
			}}
		>
			{number}
		</button>
	);
}
