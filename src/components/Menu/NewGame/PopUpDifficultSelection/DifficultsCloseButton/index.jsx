import React, { useContext } from "react";
import { PopUpViewContext } from "../../../../../contexts/PopUpViewContext/PopUpViewContext";

import "./DifficultsCloseButton.css";

export function DifficultsCloseButton() {
	const { changePopUp } = useContext(PopUpViewContext);
	return (
		<button
			className="close-pop-up"
			type="button"
			onClick={() => changePopUp()}
		>
			✕
		</button>
	);
}
