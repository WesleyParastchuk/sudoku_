import React from "react";

import "./CellSpace.css"

export function CellSpace({cell}) {
    return(<button type="button" className="cell-space">
        {cell}
    </button> )
}