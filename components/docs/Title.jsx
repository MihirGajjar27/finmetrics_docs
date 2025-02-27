import React from "react";

export default function Title({children, id}) {
    return(
        <div>
            <h1 id={id} className={"text-xl sm:text-2xl pb-4 pt-3 font-medium transition-all duration-300"}>{children}</h1>
        </div>
    )
}