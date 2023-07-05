import React, { useContext } from "react";
import { PopUpDifficultSelection } from "./PopUpDifficultSelection";
import { PopUpViewContext } from "../../../contexts/PopUpViewContext/PopUpViewContext";

import "./NewGame.css";

export function NewGame() {
	const { changePopUp } = useContext(PopUpViewContext);
	return (
		<>
			<button
				type="button"
				className="new-game-button"
				onClick={() => changePopUp()}
			>
				Novo Jogo
			</button>
			<PopUpDifficultSelection />
		</>
	);
}
