"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "./ui/button";
import { dayTranslation } from './days-panel';

const NavDaysButtons = ({ day }) => {

    const pathname = usePathname()

    const [isNavigating, setIsNavigating] = useState(false);

    const handleLinkClick = () => {
        if (!isNavigating) {
            setIsNavigating(true);

            setTimeout(() => {
                setIsNavigating(false); // Restablecer la bandera de navegación.
            }, 2000); // 2000 milisegundos = 2 segundos

        }
    };

    const isActive = pathname === `/${dayTranslation[day]}`

    return (
        <>
            <Link
                onClick={handleLinkClick}
                className={`${buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    size: "lg",
                    navButtons: "nav",
                })} `}
                href={`/${dayTranslation[day]}`}
            >
                <span className='font-bold'>{day}</span>
            </Link >
        </>

    );
}

export default NavDaysButtons
