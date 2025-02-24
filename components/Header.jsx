import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";

export default function Header({ isDarkMode, setIsDarkMode }) {
    return (
        <div
            className={`
            sticky top-0 z-50 h-15 w-full 
            border-b border-solid 
            ${isDarkMode ? "bg-gray-1000 border-gray-700" : "bg-white border-gray-300"}
          `}
        >
        <div className={"flex justify-center"}>
                <div className="flex flex-row flex-nowrap w-full p-3 justify-between max-w-7xl">
                    <Link href={'/'}>
                        <div className="flex flex-row flex-nowrap w-96 text-xl justify-start">
                            <span className="flex text-2xl">Finmetrics</span>
                        </div>
                    </Link>
                    <div className="flex flex-row flex-nowrap w-96 space-x-4 justify-end">
                        {/*<div className={`flex p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-950" : "hover:bg-gray-200"} justify-center items-center`}>*/}
                        {/*    <IoIosSearch size={20} />*/}
                        {/*</div>*/}
                        <Link href={"https://github.com/MihirGajjar27/finmetrics"}>
                            <div className={`flex p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-950" : "hover:bg-gray-200"} justify-center items-center`}>
                                <FiGithub size={20} />
                            </div>
                        </Link>
                        <div className={`flex p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-950" : "hover:bg-gray-200"} justify-center items-center`}>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className={"border-0 focus:outline-none appearance-none"}>
                                {isDarkMode ? (
                                    <MdOutlineLightMode size={20} />
                                ) : (
                                    <MdOutlineDarkMode size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
