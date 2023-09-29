"use client"
import Link from "next/link"
import { useState } from "react";

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div className="dark:bg-black h-screen-ful">
            <nav className={`flex flex-col h-screen-ful dark:text-white border rounded-xl ${collapsed ? 'w-0 overflow-hidden' : 'w-auto'}`}>

                <div className="flex-1">
                    <ul className="space-y-2 p-4">
                        <li>
                            <Link href="/" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/monday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Lunes
                            </Link>
                        </li>
                        <li>
                            <Link href="/tuesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Martes
                            </Link>
                        </li>
                        <li>
                            <Link href="/wednesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Míercoles
                            </Link>
                        </li>
                        <li>
                            <Link href="/thursday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Jueves
                            </Link>
                        </li>
                        <li>
                            <Link href="/friday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                Viernes
                            </Link>
                        </li>
                        <button className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200" onClick={handleToggleCollapse}>
                            <span className="">Collapse</span>
                        </button>
                    </ul>
                </div>

            </nav>
        </div>

    )
}

export default Sidebar;

