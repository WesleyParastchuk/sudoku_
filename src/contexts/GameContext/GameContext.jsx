import React, { createContext, useState } from "react";

import { game } from "../../App";
import { getEmptyMatriz } from "../../script/manipulableFuntions";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
	const [thisGame, setThisGame] = useState(game.actualGame);

	async function setNewGame() {
		setThisGame(getEmptyMatriz());
		const thisGame = await game.initNewGame();
		setThisGame(await thisGame);
	}

	async function actGame() {
		setThisGame(await thisGame);
	}

	return (
		<GameContext.Provider value={{ thisGame, setNewGame, actGame }}>
			{children}
		</GameContext.Provider>
	);
}
