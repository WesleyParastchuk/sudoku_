import React, { useContext } from "react";
import { PopUpViewContext } from "../../../../../contexts/PopUpViewContext/PopUpViewContext";
import { GameContext } from "../../../../../contexts/GameContext/GameContext";

import "./DifficultsCloseButton.css";

export function DifficultsCloseButton() {
	const { changePopUp } = useContext(PopUpViewContext);
	const { changePauseMove } = useContext(GameContext);
	return (
		<button
			className="close-pop-up"
			type="button"
			onClick={() => {
				changePopUp();
				changePauseMove();
			}}
		>
			✕
		</button>
	);
}
