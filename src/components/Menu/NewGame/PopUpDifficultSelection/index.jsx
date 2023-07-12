import React, { useContext } from "react";
import { Difficults } from "./Difficults";
import { PopUpViewContext } from "../../../../contexts/PopUpViewContext/PopUpViewContext";
import { DifficultsCloseButton } from "./DifficultsCloseButton";
import { GlassEffect } from "../../../Styles/GlassEffect";

import "./PopUpDifficultSelection.css";

export function PopUpDifficultSelection() {
	const { popUp } = useContext(PopUpViewContext);
	return (
		<GlassEffect style={{ display: popUp }}>
			<div className="pop-up-difficult-selection-container">
				<Difficults />
			</div>
			<DifficultsCloseButton />
		</GlassEffect>
	);
}
