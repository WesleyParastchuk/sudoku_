import React, { createContext, useState } from "react";

import { game } from "../../App";

export const PopUpViewContext = createContext();

export function PopUpViewContextProvider({ children }) {
	const [popUp, setPopUp] = useState(game.firstTime ? "block" : "none");

	function changePopUp() {
		setPopUp(popUp == "block" ? "none" : "block");
	}

	return (
		<PopUpViewContext.Provider value={{ popUp, changePopUp }}>
			{children}
		</PopUpViewContext.Provider>
	);
}
