import React, { useState } from "react";

import "./NewGame.css";
import "./Difficult.css";

import {
	getAllDifficults,
	title,
	removeDash,
} from "../../../script/manipulableFuntions";
import { game } from "../../../App";

const NewGame = (props) => {
	const difficults = getAllDifficults();
	const [display, setDifficultDisplay] = useState("none");

	function closeSelection() {
		setDifficultDisplay("none");
	}

	function openSelection() {
		setDifficultDisplay("block");
	}

	return (
		<>
			<div className="toolbar-new-game" onClick={openSelection}>
				Novo jogo
			</div>

			<div className="pop-up-glass" style={{ display: display }}>
				<div className="pop-up-container">
					<div
						className="quit-difficult-selection"
						onClick={closeSelection}
					>
						<p className="quit-difficult-selection-symbol">×</p>
					</div>
					{difficults.map((dif) => {
						return (
							<button
								className={`${dif} difficult`}
								key={dif}
								onClick={() => {
									game.difficult = dif;
									closeSelection();
									game.initNewGame();
									props.setThisGame(game.actualGame)
								}}
							>
								{removeDash(title(dif))}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default NewGame;
