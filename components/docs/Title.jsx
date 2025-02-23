import React from "react";

export default function Title({children, id}) {
    return(
        <div>
            <h1 id={id} className={"text-2xl pb-4 pt-3 font-medium"}>{children}</h1>
        </div>
    )
}