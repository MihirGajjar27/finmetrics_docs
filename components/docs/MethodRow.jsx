import React from "react";

export default function MethodRow({ isDark, children }) {
    const borderColor = isDark ? "border-gray-700" : "border-gray-300";

    return (
        <tr>
            {React.Children.map(children, (child, index) => (
                <td key={index} className={`py-2.5 px-1.5 sm:py-3.5 sm:px-2 border-t-1 border-solid transition-all duration-300 ${borderColor}`}>
                    {child}
                </td>
            ))}
        </tr>
    );
}
