import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function DocPath({ isDark, filepathArray }) {
    const defaultTextColor = isDark ? "text-gray-300" : "text-gray-700";
    const lastTextColor = isDark ? "text-white" : "text-black";

    return (
        <div className="flex flex-row flex-nowrap items-center py-5">
            {filepathArray.map((item, index) => (
                <React.Fragment key={index}>
                    <span
                        className={
                            index === filepathArray.length - 1
                                ? lastTextColor
                                : defaultTextColor
                        }
                    >
                        {item}
                    </span>
                    {index < filepathArray.length - 1 && (
                        <FaChevronRight className={`mx-2 ${isDark ? "text-gray-300" : "text-gray-700"}`} size={10}/>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
