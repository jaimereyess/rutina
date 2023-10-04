import React, { useState, useEffect } from 'react';
import { SVGSun, SVGMoon } from "./svg"

const DarkToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDarkMode);

            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                document.documentElement.classList.add(savedTheme);
            } else {
                document.documentElement.classList.add(prefersDarkMode ? "dark" : "light");
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        localStorage.setItem("theme", isDarkMode ? "light" : "dark");

        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className={"transition duration-500 ease-in-out"}>
            <button
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-200'
                    } ${isDarkMode ? 'text-gray-900' : 'text-white'
                    } transition-colors duration-200`}
            >
                {isDarkMode
                    ? <SVGSun />
                    : <SVGMoon />}
            </button>
        </div>
    );
};

export default DarkToggle;
