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
import Prop from "@/components/docs/Prop";
import MethodTable from "@/components/docs/MethodTable";
import MethodRow from "@/components/docs/MethodRow";
import TextLine from "@/components/docs/TextLine";
import CodeBlock from "@/components/docs/CodeBlock";
import LinkProp from "@/components/docs/LinkProp";
import Link from "next/link";

export default function Home() {
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

    const links = {
        'About': 'about',
        'Methods': 'methods'
    }

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
                    <DocPath isDark={isDarkMode} filepathArray={["Getting Started", "Introduction"]}/>

                    <PageTitle>Introduction</PageTitle>
                    <Paragraph isDark={isDarkMode}>This section provides an overview about Finmetrics.</Paragraph>

                    <Title id={'about'}>About</Title>
                    <Paragraph isDark={isDarkMode}>Finmetrics is a open source python and npm package aimed to help
                        speed up the process of developing financial applications and programs using both platforms.
                        This package contains pre-built classes, methods, and functions, and (future) charts and visualizations.
                        This package can be used by almost anyone from casual investors to professionals in finance.
                    </Paragraph>

                    <Title id={'methods'}>Methods</Title>
                    <MethodTable headers={["Method", "Description"]}>
                        <MethodRow isDark={isDarkMode}>
                            <LinkProp isDark={isDarkMode} color={'blue'} link={'/rates-and-returns#holding-period-return'}>
                                holding_period_return()
                            </LinkProp>
                            <TextLine isDark={isDarkMode}>Calculates the holding period return for a single period</TextLine>
                        </MethodRow>
                        <MethodRow isDark={isDarkMode}>
                            <LinkProp isDark={isDarkMode} color={'blue'} link={'/rates-and-returns#holding_period-return-multi-period'}>
                                holding_period_return_multi_period()
                            </LinkProp>
                            <TextLine isDark={isDarkMode}>Calculates the holding period return for multiple periods</TextLine>
                        </MethodRow>
                        <MethodRow isDark={isDarkMode}>
                            <LinkProp isDark={isDarkMode} color={'blue'} link={'/rates-and-returns#arithmetic-return'}>
                                arithmetic_return()
                            </LinkProp>
                            <TextLine isDark={isDarkMode}>Calculates the arithmetic return for a series of values</TextLine>
                        </MethodRow>
                        <MethodRow isDark={isDarkMode}>
                            <LinkProp isDark={isDarkMode} color={'blue'} link={'/rates-and-returns#geometric-return'}>
                                geometric_return()
                            </LinkProp>
                            <TextLine isDark={isDarkMode}>Calculates the geometric return for a series of values</TextLine>
                        </MethodRow>
                        <MethodRow isDark={isDarkMode}>
                            <LinkProp isDark={isDarkMode} color={'blue'} link={'/rates-and-returns#harmonic-mean'}>
                                harmonic_mean()
                            </LinkProp>
                            <TextLine isDark={isDarkMode}>Calculates the harmonic mean for a series of values</TextLine>
                        </MethodRow>
                    </MethodTable>

                </Page>
                <OnThisPage isDark={isDarkMode} links={links}/>

            </div>
        </div>
    );
}
