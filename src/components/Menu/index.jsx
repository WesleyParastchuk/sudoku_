import React from "react";
import { NewGame } from "./NewGame";
import { NumberSelection } from "./NumberSelection";
import { DifficultSelectionContextProvider } from "../../contexts/DifficultSelectionContext/DifficultSelectionContext";
import { PopUpViewContextProvider } from "../../contexts/PopUpViewContext/PopUpViewContext";
import { Reset } from "./Reset";
import { Pause } from "./Pause";
import { Notes } from "./Notes";

import "./Menu.css";

export function Menu() {
	return (
		<div className="menu-container">
			<div className="bar-options">
				<Pause />
				<Reset />
			</div>
			<DifficultSelectionContextProvider>
				<NumberSelection />
				<Notes />
				<PopUpViewContextProvider>
					<NewGame />
				</PopUpViewContextProvider>
			</DifficultSelectionContextProvider>
		</div>
	);
}
