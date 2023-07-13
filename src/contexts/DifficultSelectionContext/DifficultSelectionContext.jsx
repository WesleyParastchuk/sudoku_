import React, { createContext, useState } from "react";

import { game } from "../../App";

export const DifficultSelectionContext = createContext();

export function DifficultSelectionContextProvider({ children }) {
	const [difficult, setThisDifficult] = useState(game.difficult);

	function setNewDifficult(difficult) {
		game.difficult = difficult;
		setThisDifficult(difficult);
	}

	return (
		<DifficultSelectionContext.Provider
			value={{ difficult, setNewDifficult }}
		>
			{children}
		</DifficultSelectionContext.Provider>
	);
}
