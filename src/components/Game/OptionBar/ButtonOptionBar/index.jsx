import React from "react";

import "./ButtonOptionBar.css";

const ButtonOptionBar = (props) => {
	return (
		<div className={`game-option-bar-button ${props.option}`}>
            <label htmlFor={`${props.option}`}>{`${props.option}`}</label>
			<input type="checkbox" name={`${props.option}`} />
		</div>
	);
};

export default ButtonOptionBar;
