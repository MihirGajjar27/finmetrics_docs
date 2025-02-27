import React from "react";

export default function PageTitle({children}) {
    return(
        <div>
            <h1 className={"text-2xl sm:text-3xl pb-7 font-medium transition-all duration-300"}>{children}</h1>
        </div>
    )
}