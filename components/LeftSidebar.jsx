import Link from "next/link";
import { useRouter } from "next/router";

const LeftSidebar = ({ isDark }) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const linkClass = (href) =>
        `py-1.5 px-3 ${currentPath === href 
            ? `border-1 border-solid ${isDark ? "bg-blue-900 border-blue-400 text-blue-400" : "bg-blue-100 border-blue-500 text-blue-500"} rounded-lg` 
            : "hover:text-blue-500 border-1 bolder-solid border-transparent"
    }`;

    return (
        <div className="flex">
            <div className="p-5 flex flex-col w-72 mr-10">
                <div className="sticky z-50 top-20 rounded-lg w-full">
                    <div className="mt-4">
                        <h3
                            className={`${
                                isDark ? "text-gray-500" : "text-gray-700"
                            } text-lg font-semibold mb-2`}
                        >
                            Getting Started:
                        </h3>
                        <ul className="ml-0">
                            <li className="mb-1">
                                <Link href="/">
                                    <p className={linkClass("/")}>Introduction</p>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/installation">
                                    <p className={linkClass("/installation")}>Installation</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3
                            className={`${
                                isDark ? "text-gray-500" : "text-gray-700"
                            } text-lg font-semibold mb-2`}
                        >
                            Methods:
                        </h3>
                        <ul className="ml-0">
                            <li className="mb-1">
                                <Link href="/rates-and-returns">
                                    <p className={linkClass("/rates-and-returns")}>
                                        Rates and Returns
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
