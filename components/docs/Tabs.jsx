import React, { useState } from 'react';

export default function Tabs({ children, isDark = false, tabs = [] }) {
    const [activeTab, setActiveTab] = useState(0);

    const lineColor = isDark ? 'border-gray-700' : 'border-gray-300';
    const activeTextColor = isDark ? 'text-white' : 'text-gray-1000';
    const inactiveTextColor = isDark ? 'text-gray-700' : 'text-gray-500';

    return (
        <div>
            <div className={`flex space-x-4 border-b-1 border-solid ${lineColor}`}>
                {tabs.map((tab, idx) => {
                    const isActive = idx === activeTab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(idx)}
                            className={`pb-3 px-2 transition-colors ${
                                isActive
                                    ? `${activeTextColor} border-b-2 border-solid border-current`
                                    : `${inactiveTextColor}`
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
