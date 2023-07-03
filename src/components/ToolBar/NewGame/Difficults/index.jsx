import React from "react";

import "./Difficult.css";

import {
	getAllDifficults,
	title,
	removeDash,
} from "../../../../script/manipulableFuntions";
import { game } from "../../../Game/SudokuMatriz";

const Difficults = (props) => {
	const difficults = getAllDifficults();

	return (
		<div className="pop-up-glass" style={{ display: props.display }}>
			<div className="pop-up-container">
				{difficults.map((difficult) => {
					return (
						<button
							className={`${difficult} difficult`}
							key={difficult}
							onClick={() => (game.difficult = difficult)}
						>
							{removeDash(title(difficult))}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Difficults;
