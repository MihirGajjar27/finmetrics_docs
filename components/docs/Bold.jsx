import React from "react";

export default function Bold({children, isDark}) {
    return (<strong className={`${isDark ? "text-white font-semibold" : "text-black font-semibold"}`}>{children}</strong>);
}