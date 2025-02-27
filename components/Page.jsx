import React from "react";
import Head from 'next/head';

export default function Page({ children, title="" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="flex justify-center">
                <div className="py-5 max-w-[450px] xs:max-w-[500px] sm:max-w-[850px] w-full px-4 transition-transform duration-300">
                    {children}
                </div>
            </div>
        </>
    );
}