import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const LeftSidebar = ({ isDark }) => {
    const router = useRouter();
    const currentPath = router.pathname;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const linkClass = (href) =>
        `py-1.5 px-3 ${currentPath === href
            ? `border-1 border-solid ${isDark ? "bg-blue-900 border-blue-400 text-blue-400" : "bg-blue-100 border-blue-500 text-blue-500"} rounded-lg`
            : "hover:text-blue-500 border-1 border-solid border-transparent"
        }`;


    return (
        <div className="flex">
            <div className={`p-5 flex flex-col w-72 mr-10 lg:block ${
                isSidebarOpen
                    ? `block fixed top-0 left-0 w-screen h-screen z-50 ${
                        isDark ? "bg-gray-950" : "bg-gray-100"
                    }`
                    : "hidden lg:flex"
            }`}
            >
                <div className="sticky z-50 top-20 rounded-lg w-full">

                    {/*Getting Started Stuff*/}
                    <div className="mt-4">
                        <h3 className={`${isDark ? "text-gray-500" : "text-gray-700"} text-lg font-semibold mb-2`}>Getting Started:</h3>
                        <ul className="ml-0">
                            <li className="mb-1">
                                <Link href="/"><p className={linkClass("/")}>Introduction</p></Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/installation"><p className={linkClass("/installation")}>Installation</p></Link>
                            </li>
                        </ul>
                    </div>

                    {/*Methods Pages*/}
                    <div className="mt-8">
                        <h3 className={`${isDark ? "text-gray-500" : "text-gray-700"} text-lg font-semibold mb-2`}>Methods:</h3>
                        <ul className="ml-0">
                            <li className="mb-1">
                                <Link href="/rates-and-returns"><p className={linkClass("/rates-and-returns")}>Rates and Returns</p></Link>
                            </li>
                        </ul>
                    </div>

                    {isSidebarOpen && (
                        <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-2xl">
                            <AiOutlineClose />
                        </button>
                    )}
                </div>
            </div>
            {isClient &&
                <div className={`fixed top-14 z-40 left-0 lg:hidden m-3 p-1 rounded-lg border-1 border-solid ${isDark 
                    ? "bg-blue-900 border-blue-300 text-blue-300" 
                    : "bg-blue-100 border-blue-500 text-blue-500"} h-[30px]`}>
                    <button onClick={() => setIsSidebarOpen(true)} className="flex flex-nowrap align-middle text-xl">
                        <IoMenuOutline />
                    </button>
                </div>}
        </div>
    );
};

export default LeftSidebar;