import React, { useContext, useState } from "react";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import { GlassEffect } from "../../Styles/GlassEffect";

import "./Reset.css";

export function Reset() {
	const { resetThisGame, changePauseMove } = useContext(GameContext);
	const [isReseting, setIsReseting] = useState("none");

	function changeResetState() {
		setIsReseting(isReseting == "none" ? "block" : "none");
	}

	return (
		<>
			<button
				className="reset-button"
				type="button"
				onClick={() => {
					changeResetState();
					changePauseMove();
				}}
			>
				Reiniciar
			</button>
			<GlassEffect style={{ display: isReseting }}>
				<div className="only-center-items">
					<div className="container-reset-options">
						<p className="reset-question">
							Tem certeza que deseja reiniciar o jogo?
						</p>
						<div className="container-reset-buttons">
							<button
								className="reset-option yes"
								type="button"
								onClick={() => {
									resetThisGame();
									changeResetState();
									changePauseMove();
								}}
							>
								Sim
							</button>
							<button
								className="reset-option no"
								type="button"
								onClick={() => {
									changeResetState();
									changePauseMove();
								}}
							>
								Não
							</button>
						</div>
					</div>
				</div>
			</GlassEffect>
		</>
	);
}
