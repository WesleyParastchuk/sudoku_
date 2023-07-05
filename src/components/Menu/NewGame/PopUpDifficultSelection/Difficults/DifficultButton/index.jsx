import React, { useContext } from "react";
import { GameContext } from "../../../../../../contexts/GameContext/GameContext";
import { DifficultSelectionContext } from "../../../../../../contexts/DifficultSelectionContext/DifficultSelectionContext";
import { PopUpViewContext } from "../../../../../../contexts/PopUpViewContext/PopUpViewContext";

import "./DifficultButton.css";

import {
	title,
	removeDash,
} from "../../../../../../script/manipulableFuntions";

export function DifficultButton({ difficult }) {
	const { setNewGame } = useContext(GameContext);
	const { setNewDifficult } = useContext(DifficultSelectionContext);
	const { changePopUp } = useContext(PopUpViewContext);

	return (
		<button
			className={`pop-up-difficult-button ${difficult}`}
			onClick={() => {
				setNewDifficult(difficult);
				setNewGame();
				changePopUp();
			}}
		>
			{title(removeDash(difficult))}
		</button>
	);
}
