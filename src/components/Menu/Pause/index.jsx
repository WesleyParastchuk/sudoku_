import React, { useContext, useState } from "react";
import { GlassEffect } from "../../Styles/GlassEffect";
import { GameContext } from "../../../contexts/GameContext/GameContext";

import "./Pause.css";

export function Pause() {
	const [isPaused, setIsPaused] = useState("none");
	const { changePauseMove } = useContext(GameContext);

	function changePause() {
		setIsPaused(isPaused == "none" ? "block" : "none");
	}

	return (
		<>
			<button
				className="pause-button"
				type="button"
				onClick={() => {
					changePause();
					changePauseMove();
				}}
			>
				Pausar
			</button>
			<GlassEffect style={{ display: isPaused }}>
				<div className="only-center-button">
					<button
						className="continue-game-button"
						type="button"
						onClick={() => {
							changePause();
							changePauseMove();
						}}
					>
						Continuar
					</button>
				</div>
			</GlassEffect>
		</>
	);
}
