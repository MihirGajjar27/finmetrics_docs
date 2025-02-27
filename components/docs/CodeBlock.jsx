import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash"
import shell from "react-syntax-highlighter/dist/esm/languages/prism/powershell"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("shell", shell);

export default function CodeBlock({ code, language, isDark }) {
    const [copied, setCopied] = useState(false);

    const langMap = { py: "python", js: "javascript", sh: "shell" };
    const actualLanguage = langMap[language] || language;

    const containerClasses = isDark
        ? "codeblock-container bg-gray-950 border-1 border-solid border-gray-700 rounded-lg"
        : "codeblock-container bg-gray-100 border-1 border-solid border-gray-300 rounded-lg";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };

    const iconClasses = isDark
        ? "bg-gray-1000 border-0 border-gray-500"
        : "bg-white border-1 border-solid border-gray-200";

    return (
        <div className="rounded-lg relative transition-all duration-300 pt-5 pb-7">
            <div className={containerClasses}>
                <SyntaxHighlighter
                    language={actualLanguage}
                    style={isDark ? oneDark : oneLight}
                    customStyle={{ backgroundColor: "transparent", padding: 13, margin: 1,
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15 }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            <button
                onClick={handleCopy}
                className={`absolute top-7 right-2 p-2 rounded-lg ${iconClasses}`}
                title="Copy code"
            >
                {copied ? <IoMdCheckmark size={20} /> : <MdOutlineContentCopy size={20} />}
            </button>
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap');
              code,
              pre {
                font-family: 'Source Code Pro', monospace !important;
              }
            `}</style>
        </div>
    );
}
