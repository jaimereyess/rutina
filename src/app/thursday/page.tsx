import React from "react";
import ExerciseCard from "../../components/exercise-card";
import TittleDay from "../../components/days-letters";

function Thursday() {
    return (
        <main className="min-h-screen pb-2 grid ">
            <div>
                <TittleDay title="Jueves" />

                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <ExerciseCard exercisename={"PRESS INCLINADO EN MULTIPOWER"}
                        sets={3} repetitions={"1 x 4-6  /  2 x 6-8"} rir={"2 o 3"} />

                    <ExerciseCard exercisename={"REMO T"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"PRESS BANCA CON MANCUERNAS"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"JALÓN AGARRE NEUTRO"}
                        sets={3} repetitions={"10 - 12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"CURL MARTILLO"}
                        sets={4} repetitions={"1 x 10-12  /  3 x 12-15 / DS "} rir={"0 o 1"} />

                    <ExerciseCard exercisename={"EXTENSIÓN DE TRICEPS UNILATERAL"}
                        sets={4} repetitions={"1 x 10-12  /  3 x 12-15 "} rir={"0 o 1"} />

                </div>
            </div>
        </main>
    );
}

export default Thursday;
