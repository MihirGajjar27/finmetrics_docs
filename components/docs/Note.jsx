import React from "react";

const colorClasses = {
    gray: {
        borderDark: "border-gray-600",
        bgDark: "bg-gray-950",
        textDark: "text-gray-300",
        borderLight: "border-gray-300",
        bgLight: "bg-gray-100",
        textLight: "text-gray-1000",
    },
    red: {
        borderDark: "border-red-600",
        bgDark: "bg-red-900",
        textDark: "text-red-300",
        borderLight: "border-red-300",
        bgLight: "bg-red-100",
        textLight: "text-red-900",
    },
    yellow: {
        borderDark: "border-yellow-600",
        bgDark: "bg-yellow-900",
        textDark: "text-yellow-300",
        borderLight: "border-yellow-600",
        bgLight: "bg-yellow-100",
        textLight: "text-yellow-900",
    },
    blue: {
        borderDark: "border-blue-600",
        bgDark: "bg-blue-900",
        textDark: "text-blue-300",
        borderLight: "border-blue-300",
        bgLight: "bg-blue-100",
        textLight: "text-blue-900",
    },
    green: {
        borderDark: "border-green-600",
        bgDark: "bg-green-900",
        textDark: "text-green-300",
        borderLight: "border-green-300",
        bgLight: "bg-green-100",
        textLight: "text-green-900",
    },
};

export default function Note({ children, title, isDark, color = "gray" }) {
    const classes = colorClasses[color] || colorClasses.gray;
    return (
        <div className="w-full pb-7">
            <div
                className={`flex flex-col p-5 border-1 border-solid ${isDark ? `${classes.borderDark} ${classes.bgDark}` : `${classes.borderLight} ${classes.bgLight}`} rounded-lg`}
            >
            <span className={`text-md font-medium ${isDark ? classes.textDark : classes.textLight}`}>
              {title}
            </span>
                <p className={`pt-3 text-sm ${isDark ? classes.textDark : classes.textLight}`}>{children}</p>
            </div>
        </div>
    );
}
