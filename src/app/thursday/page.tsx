"use client"
import React from 'react'
import ExerciseCard from "../../components/exercise-card";
import { motion } from "framer-motion";
import { ExerciseCardAnimation } from "../../components/animations"

function Thursday() {
    return (
        <motion.main
            variants={ExerciseCardAnimation}
            initial="hidden"
            animate="visible"
            className="grid" >
            <h1 className="title">Jueves</h1>
            <section className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                <ExerciseCard exercisename={"PRESS BANCA"}
                    sets={3} repetitions={"1 x 4-6  /  2 x 6-8"} />

                <ExerciseCard exercisename={"PRESS BANCA INCLINADO CON MANCUERNAS"}
                    sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} />

                <ExerciseCard exercisename={"EXTENSIÓN DE CUÁDRICEPS"}
                    sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} />

                <ExerciseCard exercisename={"FEMORAL ACOSTADO"}
                    sets={4} repetitions={"10 - 12"} />

                <ExerciseCard exercisename={"PRESS MILITAR MULTIPOWER"}
                    sets={3} repetitions={"1 x 10-12  /  3 x 12-15 / DS "} />

                <ExerciseCard exercisename={"PRESS MILITAR / ARNOLD"}
                    sets={3} repetitions={"1 x 10-12  /  3 x 12-15 "} />

            </section>
        </motion.main >
    );
}

export default Thursday;
