"use client"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { exercises } from "./zone-exercise";
import { motion } from "framer-motion";
import { itemAnimated } from "./animations";

export const exerciseColor = (bodyPart: string) => {
    switch (bodyPart) {
        case 'Pecho':
            return "text-red-700";
        case 'Espalda':
            return "text-emerald-800";
        case 'Biceps':
            return "text-amber-600";
        case 'Triceps':
            return "text-sky-800";
        case 'Deltoides':
            return "text-green-500";
        case 'Cuádriceps':
            return "text-violet-600";
        case 'Isquios':
            return "text-cyan-700";
        case 'Gluteos':
            return "text-purple-600";
        case 'Gemelos':
            return "text-yellow-600";
        case 'Cadena posterior':
            return "text-sky-600";
    }
}

interface ExerciseCardProps {
    exercisename: string
    sets: number
    repetitions: string
}

const ExerciseCard = ({ exercisename, sets, repetitions }: ExerciseCardProps) => {

    const exercise = exercises.find(exercise => exercise.name === exercisename);

    const bodyPart = exercise ? exercise.bodyPart : null;

    const exerciseColorClass = exerciseColor(bodyPart as string);

    return (
        <motion.article variants={itemAnimated} >
            <Card >
                <CardHeader>
                    <CardTitle className={`text-2xl font-bold ${exerciseColorClass}`}>
                        {exercisename}
                    </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                    <section className="pt-4">
                        <p>Series: {sets}</p>
                        <p>Repeticiones: {repetitions}</p>
                    </section>

                </CardContent>
            </Card>
        </motion.article >
    )
}

export default ExerciseCard
