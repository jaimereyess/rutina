"use client"
import React, { useState } from 'react';

const DarkToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };


    return (
        <div className={`bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} transition duration-500 ease-in-out dark:bg-gray-800 dark:text-white`}>
            <button
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'
                    } ${isDarkMode ? 'text-gray-900' : 'text-white'
                    } transition-colors duration-200`}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default DarkToggle;


