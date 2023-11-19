import React from "react";
import ExerciseCard from "../../components/exercise-card";

function Wednesday() {
    return (
        <main className="min-h-screen pb-2 grid dark:text-white">
            <div>
                <h1 className="title">Miércoles</h1>
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <ExerciseCard exercisename={"SENTADILLA HACK"}
                        sets={3} repetitions={"1 x 6-8  /  2 x 8-10"} rir={"2 o 3"} />

                    <ExerciseCard exercisename={"PRENSA HORIZONTAL"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"CURL FEMORAL ACOSTADO"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"EXTENSIÓN DE CUADRICEPS"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"PATADA DE GLÚTEOS"}
                        sets={4} repetitions={"10 - 12"} rir={"1 o 0"} />

                    <ExerciseCard exercisename={"GEMELOS"}
                        sets={6} repetitions={"15 - 20"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON POLEA DE PIE"}
                        sets={4} repetitions={"12 - 15"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON MANCUERNAS SENTADO"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} />
                </div>
            </div>
        </main>
    );
}

export default Wednesday;
