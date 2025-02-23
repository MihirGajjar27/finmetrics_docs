import React from "react";

const OnThisPage = ({ links, isDark }) => {
    const handleLinkClick = (e, href) => {
        e.preventDefault();

        setTimeout(() => {
            const targetId = href.startsWith("#") ? href.substring(1) : href;
            const target = document.getElementById(targetId);
            if (target) {
                const header = document.querySelector("header");
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // extra 20px spacing
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 300);

        window.history.pushState(null, null, href);
    };

    return (
        <div className="p-5 flex flex-col w-72 ml-10 mt-4">
            <div className={`sticky top-24 p-5 rounded-lg border-1 border-solid ${isDark ? "bg-gray-950 border-gray-400" : "bg-gray-100 border-gray-500"} h-fit w-full`}>
                <h3 className={`text-lg font-medium mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>On This Page</h3>
                <ul className="space-y-0">
                    {Object.entries(links).map(([title, href]) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={(e) => handleLinkClick(e, href)}
                                className={`block py-1 px-3 ${
                                    isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-1000"
                                }`}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OnThisPage;
