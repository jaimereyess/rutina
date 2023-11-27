"use client"
import React from 'react'
import ExerciseCard from "../../components/exercise-card";
import { motion } from "framer-motion";
import { ExerciseCardAnimation } from "../../components/animations"

function Friday() {
    return (
        <motion.main
            variants={ExerciseCardAnimation}
            initial="hidden"
            animate="visible"
            className="grid" >
            <h1 className="title">Viernes</h1>
            <section className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                <ExerciseCard exercisename={"PESO MUERTO"}
                    sets={3} repetitions={"1 x 6-8  /  2 x 8-10"} />

                <ExerciseCard exercisename={"PRENSA"}
                    sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} />

                <ExerciseCard exercisename={"MARTILLO SENTADO"}
                    sets={3} repetitions={"15-20"} />

                <ExerciseCard exercisename={"CURL DE BICEPS CON BARRA W"}
                    sets={3} repetitions={"15-20"} />

                <ExerciseCard exercisename={"JALÓN NEUTRO"}
                    sets={3} repetitions={"15-20"} />

                <ExerciseCard exercisename={"FACEPULL"}
                    sets={3} repetitions={"12-15"} />
            </section>
        </motion.main >
    );
}

export default Friday;
