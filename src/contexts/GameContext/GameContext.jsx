import React, { createContext, useEffect, useState } from "react";

import { game } from "../../App";

export const GameContext = createContext();

export async function GameContextProvider({ children }) {
	const [thisGame, setThisGame] = useState(game.actualGame);

	function setNewGame() {
		game.initNewGame();
		setThisGame(game.actualGame);
	}

	return (
		<GameContext.Provider value={{ thisGame, setNewGame }}>
			{children}
		</GameContext.Provider>
	);
}
