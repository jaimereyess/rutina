import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";

const exerciseColor = ({ bodyPart }) => {
    switch (bodyPart) {
        case 'Pecho':
            return "text-red-400";
        case 'Espalda':
            return "text-emerald-300";
        case 'Biceps':
            return "text-amber-600";
        case 'Triceps':
            return "text-sky-300";
        case 'Deltoides':
            return "text-green-500";
        case 'Cuádriceps':
            return "text-violet-600";
        case 'Isquios':
            return "text-cyan-700";
        case 'Gluteos':
            return "text-purple-400";
        case 'Gemelos':
            return "text-yellow-500";
    }
}


const Exercise = ({ exercisename, sets, repetitions, rir, zone, img }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={`text-2xl font-bold
                        ${exerciseColor({ bodyPart: zone })}`}>{exercisename}
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
                <img src={img}></img>
                <section className="pt-4">
                    <p>Series: {sets}</p>
                    <p>Repeticiones: {repetitions}</p>
                    <p>RIR: {rir}</p>
                </section>

            </CardContent>
        </Card>
    )
}

export default Exercise
