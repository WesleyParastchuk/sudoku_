import React from "react";
import { NewGame } from "./NewGame";
import { NumberSelection } from "./NumberSelection";
import { DifficultSelectionContextProvider } from "../../contexts/DifficultSelectionContext/DifficultSelectionContext";
import { PopUpViewContextProvider } from "../../contexts/PopUpViewContext/PopUpViewContext";

import "./Menu.css";

export function Menu() {
	return (
		<div className="menu-container">
			<DifficultSelectionContextProvider>
				<NumberSelection />
				<PopUpViewContextProvider>
					<NewGame />
				</PopUpViewContextProvider>
			</DifficultSelectionContextProvider>
		</div>
	);
}
