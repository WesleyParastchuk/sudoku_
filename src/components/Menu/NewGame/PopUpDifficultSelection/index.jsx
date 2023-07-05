import React, { useContext } from "react";
import { Difficults } from "./Difficults";
import { PopUpViewContext } from "../../../../contexts/PopUpViewContext/PopUpViewContext";
import { DifficultsCloseButton } from "./DifficultsCloseButton";

import "./PopUpDifficultSelection.css";

export function PopUpDifficultSelection() {
	const { popUp, changePopUp } = useContext(PopUpViewContext);
	return (
		<div
			className="pop-up-difficult-selection-view"
			style={{ display: popUp }}
		>
			<div className="pop-up-difficult-selection-container">
				<Difficults />
			</div>
			<DifficultsCloseButton />
		</div>
	);
}
