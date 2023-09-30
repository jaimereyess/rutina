"use client"
import React, { useState } from 'react';
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import NavDaysButtons from './days-buttons';
import useScrollToTop from './scroll-top';

const Nav = () => {
    useScrollToTop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="flex items-center justify-between flex-wrap  p-6 dark:bg-black dark:text-white">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <Link href="/" className="font-bold text-3xl tracking-tight dark:text-white">
                        Rutina
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
                <div
                    className={`w-full block lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "" : "hidden"
                        }`} >

                    <div className="grid lg:flex">

                        <NavDaysButtons day="Lunes" />
                        <NavDaysButtons day="Martes" />
                        <NavDaysButtons day="Miércoles" />
                        <NavDaysButtons day="Jueves" />
                        <NavDaysButtons day="Viernes" />
                        <NavDaysButtons day="Perfil" />

                        <button
                            onClick={() => signIn()}
                            className={`${buttonVariants({
                                size: "lg",
                                navButtons: "nav",
                            })} bg-sky-400 px-3 py-2 rounded hover:text-black hover:bg-white`}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Nav;
