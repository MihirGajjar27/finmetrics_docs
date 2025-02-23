import React from "react";

export default function MethodTable({ children, headers }) {
    return (
        <div className={"pb-10 pt-3"}>
            <table className="w-full">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className="py-2 px-2 text-left font-light">
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
