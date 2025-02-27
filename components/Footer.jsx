import React from "react";

export default function Footer({isDark}) {
    return(
        <div className={`w-full py-5 sm:px-10 px-5 border-t-1 border-x-transparent border-b-transparent border-solid 
        ${isDark ? "border-gray-700 bg-gray-950" : "border-gray-300 bg-gray-100"}`}>
            Copyright &copy; 2025 Mihir Gajjar
        </div>
    )
}