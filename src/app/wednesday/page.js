import LeterDays from "@/src/components/days-letters";
import Exercise from "@/src/components/exercise";
import Zone from "@/src/components/zone-exercise";
function Wednesday() {
    return (
        <main className="min-h-screen pb-2 grid dark:text-white">
            <div>
                <LeterDays day="Miércoles" />
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <Exercise exercisename={"SENTADILLA HACK"}
                        sets={3} repetitions={"1 x 6-8  /  2 x 8-10"} rir={"2 o 3"} zone={Zone.QUADS} />

                    <Exercise exercisename={"PRENSA HORIZONTAL"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} zone={Zone.QUADS} />

                    <Exercise exercisename={"CURL FEMORAL ACOSTADO"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} zone={Zone.HAMSTRINGS} />

                    <Exercise exercisename={"EXTENSIÓN DE CUADRICEPS"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} zone={Zone.QUADS} />

                    <Exercise exercisename={"PATADA DE GLÚTEOS"}
                        sets={4} repetitions={"10 - 12"} rir={"1 o 0"} zone={Zone.GLUTES} />

                    <Exercise exercisename={"GEMELOS"}
                        sets={6} repetitions={"15 - 20"} rir={"0 o FALLO"} zone={Zone.CALVES} />

                    <Exercise exercisename={"ELEVACIONES LATERALES CON POLEA DE PIE"}
                        sets={4} repetitions={"12 - 15"} rir={"1 o 2"} zone={Zone.DELTOIDS} />

                    <Exercise exercisename={"ELEVACIONES LATERALES CON MANCUERNAS SENTADO"}
                        sets={4} repetitions={"12 - 15"} rir={"0 o FALLO"} zone={Zone.DELTOIDS} />
                </div>
            </div>
        </main>
    );
}

export default Wednesday;
