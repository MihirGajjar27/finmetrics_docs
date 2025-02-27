import React from "react";

export default function PropSpread({children}) {
    return(
        <div className={"flex flex-col space-y-2"}>
            {children}
        </div>
    )
}