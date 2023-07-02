import React from "react";

import "./Header.css";

const Header = () => {
	const name = ["S", "U", "D", "O", "K", "U"];
	return <header className="app-header">{
        name.map((letter, pos) => {return (<p key={`${letter, pos}`}>{letter}</p>)})
    }</header>;
};

export default Header;
