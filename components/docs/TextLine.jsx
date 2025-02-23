import React from "react";

export default function TextLine({children, isDark}) {
    return(
        <div className={`pb-0 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            {children}
        </div>
    )
}