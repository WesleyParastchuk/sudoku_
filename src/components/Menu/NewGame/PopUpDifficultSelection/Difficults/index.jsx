import React from "react";
import { DifficultButton } from "./DifficultButton";

import "./Difficults.css";

import { allDifficults } from "../../../../../script/variables";

export function Difficults() {
	return (
		<div className="pop-up-difficults-buttons-container">
			{allDifficults.map((difficult) => {
				return (
					<DifficultButton key={difficult} difficult={difficult} />
				);
			})}
		</div>
	);
}
