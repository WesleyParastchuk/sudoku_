import React, { useContext } from "react";
import { PopUpDifficultSelection } from "./PopUpDifficultSelection";
import { PopUpViewContext } from "../../../contexts/PopUpViewContext/PopUpViewContext";
import { GameContext } from "../../../contexts/GameContext/GameContext";

import "./NewGame.css";

export function NewGame() {
	const { changePopUp } = useContext(PopUpViewContext);
	const { changePauseMove } = useContext(GameContext);
 	return (
		<>
			<button
				type="button"
				className="new-game-button"
				onClick={() => {
					changePopUp();
					changePauseMove();
				}}
			>
				Novo Jogo
			</button>
			<PopUpDifficultSelection />
		</>
	);
}
