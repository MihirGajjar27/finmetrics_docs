import React from "react";

export default function Page({children}) {
    return(
        <div className={"flex justify-center"}>
            <div className="py-5 max-w-[800px]">
                {children}
            </div>
        </div>
    )
}