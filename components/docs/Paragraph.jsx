import React from "react";

export default function Paragraph({children, isDark}) {
    return(
        <div className={`pb-7 text-base sm:text-lg transition-all duration-300`}>
            {children}
        </div>
    )
}