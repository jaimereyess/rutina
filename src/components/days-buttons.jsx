"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "./ui/button";
import { dayTranslation } from './days-panel';

const NavDaysButtons = ({ day, click }) => {

    const pathname = usePathname()

    const isActive = pathname === `/${dayTranslation[day]}`

    return (
        <Link
            className={`${buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                size: "lg",
                navButtons: "nav",
            })}`}
            href={`/${dayTranslation[day]}`}
            onClick={click}
        >
            <span className='font-bold'>{day}</span>

        </Link >
    );
}

export default NavDaysButtons
