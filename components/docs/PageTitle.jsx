import React from "react";

export default function PageTitle({children}) {
    return(
        <div>
            <h1 className={"text-3xl pb-7 font-medium"}>{children}</h1>
        </div>
    )
}