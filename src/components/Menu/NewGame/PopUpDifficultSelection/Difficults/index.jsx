import React from "react";
import { DifficultButton } from "./DifficultButton";

import "./Difficults.css";

import { getAllDifficults } from "../../../../../script/manipulableFuntions";

export function Difficults() {
	return (
		<div className="pop-up-difficults-buttons-container">
			{getAllDifficults().map((difficult) => {
				return (
					<DifficultButton key={difficult} difficult={difficult} />
				);
			})}
		</div>
	);
}
