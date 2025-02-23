import React from "react";

export default function Paragraph({children, isDark}) {
    return(
        <div className={`pb-7 text-lg ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            {children}
        </div>
    )
}