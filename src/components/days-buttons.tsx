"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "./ui/button";
import { dayTranslation } from './days-panel';

interface NavavDaysBtnProps {
    day: keyof typeof dayTranslation;
    click: () => void
}

const NavDaysButtons = ({ day, click }: NavavDaysBtnProps) => {

    const pathname = usePathname()

    const isActive = pathname === `/${dayTranslation[day]}`

    return (
        <Link
            className={`${buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                size: "lg",
            })}`}
            href={`/${dayTranslation[day]}`}
            onClick={click}
        >
            <span className='font-bold'>{day}</span>

        </Link >
    );
}

export default NavDaysButtons
