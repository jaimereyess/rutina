"use client"
import React, { useState } from 'react';
import Link from "next/link";
import NavDaysButtons from './days-buttons';
import DarkToggle from "./dark.jsx"
import { useSession } from "next-auth/react"
import { UserImage } from '../components/profile-img'

import { buttonVariants } from "./ui/button";
import { dayTranslation } from './days-panel';

function ProfileBnt() {
    const { data: session } = useSession()
    if (session) {
        return (
            <span className="px-5">
                < UserImage img={session.user.image} w={40} h={40} />
            </span >
        )

    } else {
        return (
            <Link
                href="/login "
                className={`text-white p-10 rounded-md lg:inline-block lg:mt-0
                            mr-4 py-2 h-11 px-8 bg-sky-400 hover:text-black hover:bg-white`}>
                Sign In
            </Link>
        )
    }
}

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap  p-6 dark:bg-gradient-to-b dark:from-black dark:from-60% dark:to-bgDarkColor ">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <Link href="/" className="font-bold text-3xl tracking-tight dark:text-white">
                        Rutina
                    </Link>
                    <span className='block md:hidden lg:hidden p-6'><DarkToggle /></span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 rounded text-black border-2 shadow-2xl
                            font-bold hover:text-black hover:bg-slate-200
                            dark:text-white hover:dark:bg-slate-700"
                        onClick={toggleMenu}
                    >
                        <span className={`${isMenuOpen ? "hidden" : "block"}`}>☰</span>
                        <span className={`${isMenuOpen ? "block" : "hidden"}`}>X</span>
                    </button>
                </div>
                <div
                    className={`w-full block lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "" : "hidden"
                        }`} >

                    <div className="grid lg:flex">

                        <NavDaysButtons day="Lunes" click={toggleMenu} />
                        <NavDaysButtons day="Martes" click={toggleMenu} />
                        <NavDaysButtons day="Miércoles" click={toggleMenu} />
                        <NavDaysButtons day="Jueves" click={toggleMenu} />
                        <NavDaysButtons day="Viernes" click={toggleMenu} />
                        <NavDaysButtons day="General" click={toggleMenu} />
                        <NavDaysButtons day="Perfil" click={toggleMenu} />
                        {ProfileBnt()}
                        <span className='hidden md:block lg:block'><DarkToggle /></span>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Nav;
