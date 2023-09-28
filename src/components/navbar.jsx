"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";




const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-black p-6 text-white">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/" onClick={handleClick} className="font-bold text-3xl tracking-tight text-white">
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

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/monday" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })}`}
                            href="/monday"
                        >
                            Lunes
                        </Link>

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/tuesday" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })}`}
                            href="/tuesday"
                        >
                            Martes
                        </Link>

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/wednesday" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })} `}
                            href="/wednesday"
                        >
                            Miércoles
                        </Link>

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/thursday" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })}`}
                            href="/thursday"
                        >
                            Jueves
                        </Link>

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/friday" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })}`}
                            href="/friday"
                        >
                            Viernes
                        </Link>

                        <Link
                            className={`${buttonVariants({
                                variant: pathname === "/profile" ? "secondary" : "ghost",
                                size: "lg",
                                navButtons: "nav",
                            })}`}
                            href="/profile"
                        >
                            Perfil
                        </Link>


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
