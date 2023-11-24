import React from "react";
import Link from "next/link"
import { motion } from "framer-motion";
import { itemAnimated } from "./animations";

export const dayTranslation = {
    Lunes: "monday",
    Martes: "tuesday",
    Miércoles: "wednesday",
    Jueves: "thursday",
    Viernes: "friday",
    Perfil: "profile",
    General: "general"
}

interface dayPanelProps {
    day: keyof typeof dayTranslation;
    exercises: string[]
}

function DayPanel({ day, exercises }: dayPanelProps) {

    return (
        <motion.article variants={itemAnimated} className="group rounded-lg px-5 py-4 transition-colors bg-slate-200
            hover:bg-slate-300 hover:outline hover:outline-black hover:outline-2
            dark:bg-gray-800 hover:dark:bg-gray-900 hover:dark:outline hover:dark:outline-white hover:dark:outline-2">
            <Link
                href={`/${dayTranslation[day]}`} >
                <h1 className={`mb-3 text-3xl font-semibold`}>
                    {day}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h1>
                {exercises.map((exercise, index) => (
                    <p key={index}>{exercise}</p>
                ))}
            </Link>
        </motion.article>
    )
}

export default DayPanel
