import React from 'react'
import { motion } from 'framer-motion';
import DayPanel from './days-panel';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

function Panels() {
    return (
        <motion.main
            className="grid gap-5 text-center w-full lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left border-l-0 border-r-0 dark:text-white px-20"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <DayPanel day="Lunes" exercises={["Pecho", "Triceps", "Deltoides"]} />
            <DayPanel day="Martes" exercises={["Espalda", "Biceps", "Gemelos"]} />
            <DayPanel day="Miércoles" exercises={["Cuádriceps", "Isquios", "Gluteos", "Gemelos"]} />
            <DayPanel day="Jueves" exercises={["Pecho", "Espalda", "Biceps", "Triceps"]} />
            <DayPanel day="Viernes" exercises={["Isquios", "Cuádriceps", "Gluteos", "Deltoides"]} />
        </motion.main>
    )
}

export default Panels
