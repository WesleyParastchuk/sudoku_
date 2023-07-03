import React from "react";
import Difficult from "./Difficult";

import "./SelectDifficult.css";

import { getAllDifficults } from "../../../../script/manipulableFuntions";

const SelectDifficult = (props) => {
	const difficults = getAllDifficults();
	return (
		<div className="pop-up-glass" style={{ display: props.display }}>
			<div className="pop-up-container">
				<div
					className="quit-difficult-selection"
					onClick={props.closeSelection}
				>
					<p className="quit-difficult-selection-symbol">×</p>
				</div>
				{difficults.map((dif) => {
					return (
						<Difficult
							dif={dif}
							setThisGame={(NewGame) =>
								props.setThisGame(NewGame)
							}
							key={dif}
							closeSelection={() => props.closeSelection()}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SelectDifficult;
