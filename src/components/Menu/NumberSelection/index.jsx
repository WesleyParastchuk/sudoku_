import React from "react";
import { NumberSelectionButton } from "./NumberSelectionButton";

import "./NumberSelection.css"

import { listThisUpTo } from "../../../script/manipulableFuntions";
import { totalBlocks } from "../../../script/variables";

export function NumberSelection() {
	return (
		<div className="number-selection-container">
			{listThisUpTo(1, totalBlocks).map((number) => {
				return <NumberSelectionButton key={number} number={number}/>;
			})}
		</div>
	);
}
