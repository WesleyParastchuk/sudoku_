import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import { CellSpace } from "./CellSpace";

import "./ShowGame.css";

export function ShowGame() {
	const { thisGame } = useContext(GameContext);
	return (
		<div className="show-game-container">
			{thisGame.map((row, rowAdr) => {
				return row.map((cell, columnAdr) => {
					return (
						<CellSpace
							key={`${rowAdr, columnAdr}`}
							row={rowAdr}
							column={columnAdr}
							cell={cell}
						/>
					);
				});
			})}
		</div>
	);
}
