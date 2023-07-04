import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import { CellSpace } from "./CellSpace";

import "./ShowGame.css"

export function ShowGame() {
	const { thisGame } = useContext(GameContext);
	return (
		<div className="show-game-container">
			{thisGame.map(row => {
				return row.map(cell => {
					return <CellSpace cell={cell} />;
				});
			})}
		</div>
	);
}
