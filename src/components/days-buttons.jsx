"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "./ui/button";
import { dayTranslation } from './days-panel';

const NavDaysButtons = ({ day }) => {

    const pathname = usePathname()

    const isActive = pathname === `/${dayTranslation[day]}`

    return (
        <>
            <Link
                className={`${buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    size: "lg",
                    navButtons: "nav",
                })} ease-in-out duration-300 `}
                href={`/${dayTranslation[day]}`}
            >
                <span className='font-bold'>{day}</span>
            </Link >
        </>

    );
}

export default NavDaysButtons
