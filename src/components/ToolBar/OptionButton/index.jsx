import React from "react";
import "./OptionButton.css";

const OptionButton = (props) => {
	return (
		<button className={`option-button ${props.option}`} type="submit">
			{props.option}
		</button>
	);
};

export default OptionButton;
