import React from "react";

import "./GlassEffect.css"

export function GlassEffect({children, style}){
    return(
        <div className="glass-effect" style={style}>
            {children}
        </div>
    )
}