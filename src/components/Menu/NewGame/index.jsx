import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext/GameContext";

import "./NewGame.css"

export function NewGame() {
	const { setNewGame } = useContext(GameContext);
	return (
		<button
			type="button"
			className="new-game-button"
			onClick={() => setNewGame()}
		>
			Novo Jogo
		</button>
	);
}
