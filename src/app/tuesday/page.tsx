"use client"
import React from "react";
import ExerciseCard from "../../components/exercise-card";
import { motion } from "framer-motion";
import { ExerciseCardAnimation } from "../../components/animations"

function Tuesday() {
    return (
        <motion.main
            variants={ExerciseCardAnimation}
            initial="hidden"
            animate="visible"
            className="grid" >
            <h1 className="title">Martes</h1>
            <section className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                <ExerciseCard exercisename={"PRESS BANCA"}
                    sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} />

                <ExerciseCard exercisename={"PRESS BANCA INCLINADO CON MANCUERNAS"}
                    sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} />

                <ExerciseCard exercisename={"TRICEPS CON BARRA"}
                    sets={4} repetitions={"1 x 10-12  /  3 x 12-15  /  DS"} />

                <ExerciseCard exercisename={"TRICEPS UNILATERAL"}
                    sets={4} repetitions={"1 x 10-12  /  3 x 12-15"} />

                <ExerciseCard exercisename={"ELEVACIONES LATERALES CON POLEA"}
                    sets={4} repetitions={"10 - 12"} />

                <ExerciseCard exercisename={"ELEVACIONES FRONTALES CON MANCUERNAS"}
                    sets={4} repetitions={"15 - 20"} />


            </section>
        </motion.main >
    );
}

export default Tuesday;
