import TittleDay from "../../components/days-letters";
import ExerciseCard from "../../components/exercise-card";

function Tuesday() {
    return (
        <main className="min-h-screen pb-2 grid">
            <div>
                <TittleDay title="Martes" />
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <ExerciseCard exercisename={"REMO CON BARRA"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"2 o 3"} />

                    <ExerciseCard exercisename={"DOMINADAS CON AYUDAS"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"CURL DE BICEPS CON BARRA W"}
                        sets={4} repetitions={"1 x 10-12  /  3 x 12-15  /  DS"} rir={"0 o 1"} />

                    <ExerciseCard exercisename={"PREDICADOR CON MANCUERNAS"}
                        sets={4} repetitions={"1 x 10-12  /  3 x 12-15"} rir={"0 o 1"} />

                    <ExerciseCard exercisename={"REMO EN MÁQUINA"}
                        sets={3} repetitions={"10 - 12"} rir={"1 o 2"} />

                    <ExerciseCard exercisename={"REMO GIRONDA"}
                        sets={3} repetitions={"15 - 20"} rir={"0 o FALLO"} />

                    <ExerciseCard exercisename={"SÓLESOS"}
                        sets={6} repetitions={"15 - 20"} rir={"0 o FALLO"} />
                </div>
            </div>
        </main>
    );
}

export default Tuesday;
