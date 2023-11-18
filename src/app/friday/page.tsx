import React from 'react'
import TittleDay from "../../components/days-letters";
import ExerciseCard from "../../components/exercise-card";

function Friday() {
    return (
        <main className="min-h-screen pb-2 grid">
            <div>
                <TittleDay title="Viernes" />
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <ExerciseCard exercisename={"PESO MUERTO RUMANO"}
                        sets={3} repetitions={"1 x 6-8  /  2 x 8-10"} rir={"2 o 3"} />

                    <ExerciseCard exercisename={"PRENSA A 45º"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"CURL FERMORAL ACOSTADO"}
                        sets={4} repetitions={"15-20"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"EXTENSIÓN DE CUADRICEPS"}
                        sets={4} repetitions={"15-20"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"HIP TRUST"}
                        sets={4} repetitions={"15-20"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON POLEA DE PIE"}
                        sets={4} repetitions={"12-15"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON MANCUERNAS SENTADO"}
                        sets={4} repetitions={"12-15"} rir={"0 o FALLO"} />
                </div>
            </div>
        </main>
    );
}

export default Friday;
