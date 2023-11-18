import TittleDay from "../../components/days-letters";
import ExerciseCard from "../../components/exercise-card";

function Monday() {
    return (
        <main className="min-h-screen pb-2 grid">
            <div>
                <TittleDay title="Lunes" />
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <ExerciseCard exercisename={"PRESS BANCA CON BARRA"}
                        sets={3} repetitions={"1 x 4-6  /  2 x 6-8"} rir={"2 o 3"} />

                    <ExerciseCard exercisename={"PRESS BANCA INCLINADO CON MANCUERNAS"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"PRESS FRANCÉS EN POLEA"}
                        sets={4} repetitions={"1 x 10-12 / 3 x 12-15"} rir={"0 o 1"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON POLEA DE PIE"}
                        sets={4} repetitions={"12 a 15"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"ELEVACIONES LATERALES CON MANCUERNAS SENTADO"}
                        sets={4} repetitions={"12 a 15"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"EXTENSIONES DE TRICEPS EN POLEA CON SOGA"}
                        sets={4} repetitions={"1 x 10-12 / 3 x 12-15"} rir={"0 o 1"} />

                    <ExerciseCard exercisename={"PRESS EN MAQUINA"}
                        sets={3} repetitions={"12 a 15"} rir={"FALLO"} />
                </div>
            </div>
        </main>
    );
}

export default Monday;
