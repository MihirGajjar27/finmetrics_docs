import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import PageTitle from "@/components/docs/PageTitle";
import Title from "@/components/docs/Title";
import Paragraph from "@/components/docs/Paragraph";
import Bold from "@/components/docs/Bold";
import Page from "@/components/Page";
import LeftSidebar from "@/components/LeftSidebar";
import OnThisPage from "@/components/OnThisPage";
import DocPath from "@/components/docs/DocPath";
import Note from "@/components/docs/Note";


export default function RatesAndReturns() {
    // Lazy initializer: Only run on the client (after window exists).
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("isDarkMode");
            return saved !== null ? saved === "true" : false;
        }
        return false;
    });

    // Flag to ensure client-only rendering after mounting.
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update localStorage whenever isDarkMode changes.
    useEffect(() => {
        localStorage.setItem("isDarkMode", isDarkMode);
    }, [isDarkMode]);

    // Don't render anything until after mounting to avoid flash of default theme.
    if (!mounted) return null;

    // Define the on-page links as a JSON object.
    const onThisPageLinks = {
        "Holding Period Return": "#holding-period-return",
        "Arithmetic Return": "#arithmetic-return",
        "Geometric Return": "#geometric-return",
    };

    return (
        <div
            className={`min-h-screen ${
                isDarkMode ? "bg-gray-1000 text-white" : "bg-white text-black"
            }`}
        >
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div className="flex flex-row flex-nowrap justify-center">
                <LeftSidebar isDark={isDarkMode} />
                <Page>
                    <DocPath isDark={isDarkMode} filepathArray={["Methods", "Rates and Returns"]}/>
                    <PageTitle>Rates & Returns</PageTitle>
                </Page>
                <OnThisPage links={onThisPageLinks} isDark={isDarkMode} />
            </div>
        </div>
    );
}
