import React, { useState } from "react";
import { GlassEffect } from "../../Styles/GlassEffect";

import "./Pause.css";

export function Pause() {
	const [isPaused, setIsPaused] = useState("none");

	function changePause() {
		setIsPaused(isPaused == "none" ? "block" : "none");
	}

	return (
		<>
			<button
				className="pause-button"
				type="button"
				onClick={changePause}
			>
				Pausar
			</button>
			<GlassEffect style={{ display: isPaused }}>
				<div className="only-center-button">
					<button
						className="continue-game-button"
						type="button"
						onClick={changePause}
					>
						Continuar
					</button>
				</div>
			</GlassEffect>
		</>
	);
}
