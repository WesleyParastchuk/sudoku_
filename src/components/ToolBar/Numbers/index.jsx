import React from "react";

import "./Numbers.css";

const Numbers = (props) => {
	const nums = setNums();    

	function setNums() {
		let array = [];
		for (let i = 1; i <= props.max; i++) array.push(i);
        return array;
	}

	return (
		<div className="toolbar-numbers-to-click">
			{nums.map((num) => {
				return(<button type="submit" className={`number-to-click`} key={num}>{num}</button>);
			})}
		</div>
	);
};

export default Numbers;

