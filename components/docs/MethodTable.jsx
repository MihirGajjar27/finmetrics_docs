import React from "react";

export default function MethodTable({ children, headers }) {
    return (
        <div className={"pb-10 pt-3"}>
            <table className="w-full">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className="py-1.5 px-1.5 sm:py-2 sm:px-2 text-left font-light transition-all duration-300">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}
