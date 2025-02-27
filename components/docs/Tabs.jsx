import React, { useState } from 'react';

export default function Tabs({ children, isDark = false, tabs = [] }) {
    const [activeTab, setActiveTab] = useState(0);

    const lineColor = isDark ? 'border-gray-700' : 'border-gray-300';

    return (
        <div>
            <div className={`flex space-x-4 border-b-1 border-x-transparent border-t-transparent border-solid ${lineColor}`}>
                {tabs.map((tab, idx) => {
                    const isActive = idx === activeTab;
                    return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(idx)}
                                className={`pb-3 px-2 text-sm sm:text-base ${
                                    isActive
                                        ? `border-b-2 border-x-transparent border-t-transparent border-solid`
                                        : ``
                                }`}
                            >
                                {tab}
                            </button>
                    );
                })}
            </div>
            <div className="-mt-0">
                {children[activeTab]}
            </div>
        </div>
    );
}
