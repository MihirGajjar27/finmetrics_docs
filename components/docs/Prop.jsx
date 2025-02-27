import React from "react";

export default function Prop({children, isDark, color='gray'}) {

    const gray = {
        'dark': "border-gray-700 bg-gray-950 text-gray-300",
        'light': "border-gray-300 bg-gray-100 text-gray-1000"
    }
    const blue = {
        'dark': "border-blue-700 bg-blue-950 text-blue-300",
        'light': "border-blue-300 bg-blue-100 text-blue-500"
    }

    const c = (color === 'gray' ? gray : blue)

    return(
        <div className={"flex-nowrap inline-flex align-middle w-fit"}>
            <span className={`px-2 py-1.5 ${isDark ? c.dark : c.light}
                border-1 border-solid rounded-lg text-xs sm:text-sm`}>
                {children}
            </span>
        </div>
    )
}