import React, { createContext, useState} from "react";

export const PopUpViewContext = createContext();

export function PopUpViewContextProvider({children}) {
    const [popUp, setPopUp] = useState("block");

    function changePopUp() {
		setPopUp(popUp == "block" ? "none" : "block");
	}

    return (
        <PopUpViewContext.Provider value={{popUp, changePopUp}}>
            {children}
        </PopUpViewContext.Provider>
    )
}
