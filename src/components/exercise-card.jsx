import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { exercises } from "./zone-exercise";


export const exerciseColor = ({ bodyPart }) => {
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
    }
}


const ExerciseCard = ({ exercisename, sets, repetitions, rir }) => {

    const exercise = exercises.find(exercise => exercise.name === exercisename);

    const bodyPart = exercise ? exercise.bodyPart : null;

    const exerciseColorClass = exerciseColor({ bodyPart });

    return (
        <Card>
            <CardHeader>
                <CardTitle className={`text-2xl font-bold ${exerciseColorClass}`}>
                    {exercisename}
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
                <section className="pt-4">
                    <p>Series: {sets}</p>
                    <p>Repeticiones: {repetitions}</p>
                    <p>RIR: {rir}</p>
                </section>

            </CardContent>
        </Card>
    )
}




export default ExerciseCard
