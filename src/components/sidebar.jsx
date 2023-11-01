"use client"
import Link from "next/link"
import { useState } from "react";

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div className="dark:bg-black">
            <nav className={`flex flex-col min-h-full bg-black text-white dark:text-white border rounded-xl ${collapsed ? 'w-20 overflow-hidden' : 'w-auto'}`}>

                <div className="flex-1 text-4xl">
                    <ul className="space-y-2 p-4">
                        <li>
                            <Link href="/" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Incio</span>
                                <span className={`${collapsed ? 'flex' : 'hidden'}`}> I</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/monday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Lunes</span>
                                <span className={`${collapsed ? 'flex' : 'hidden'}`}> L</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tuesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Martes</span>
                                <span className={`${collapsed ? 'flex' : 'hidden'}`}> M</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/wednesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Miércoles</span>
                                <span className={`${collapsed ? 'flex items-center ' : 'hidden'}`}> X</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/thursday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Jueves</span>
                                <span className={`${collapsed ? 'flex' : 'hidden'}`}> J</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/friday" className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200">
                                <span className={`${collapsed ? 'hidden' : 'flex'}`}> Viernes</span>
                                <span className={`${collapsed ? 'flex' : 'hidden'}`}> V</span>
                            </Link>
                        </li>
                        <button className="flex items-center space-x-2 p-2 rounded transition duration-300 dark:hover:bg-gray-700 hover:bg-gray-200" onClick={handleToggleCollapse}>
                            <span className={`${collapsed ? 'hidden' : 'flex'}`}>&lArr;</span>
                            <span className={`${collapsed ? 'flex' : 'hidden'}`}>&rArr;</span>
                        </button>
                    </ul>
                </div>

            </nav>
        </div>

    )
}

export default Sidebar;

