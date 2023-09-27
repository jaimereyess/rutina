import LeterDays from "@/src/components/days-letters";
import Exercise from "@/src/components/exercise";
import Zone from "@/src/components/zone-exercise";

function Monday() {
    return (
        <main className=" min-h-screen bg-darkgrey text-white pb-2 grid ">
            <div>
                <LeterDays day="Lunes" />
                <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <Exercise exercisename={"PRESS BANCA CON BARRA"}
                        sets={3} repetitions={"1 x 4-6  /  2 x 6-8"} rir={"2 o 3"} zone={Zone.CHEST} />

                    <Exercise exercisename={"PRESS BANCA INCLINADO CON MANCUERNAS"}
                        sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} zone={Zone.CHEST} />

                    <Exercise exercisename={"PRESS FRANCÉS EN POLEA"}
                        sets={3} repetitions={"1 x 10-12 / 3 x 12-15"} rir={"0 o 1"} zone={Zone.TRICEPS} />

                    <Exercise exercisename={"ELEVACIONES LATERALES CON POLEA DE PIE"}
                        sets={4} repetitions={"12 a 15"} rir={"1 o 2"} zone={Zone.DELTOIDS} />

                    <Exercise exercisename={"ELEVACIONES LATERALES CON MANCUERNAS SENTADO"}
                        sets={4} repetitions={"12 a 15"} rir={"0 o FALLO"} zone={Zone.DELTOIDS} />

                    <Exercise exercisename={"EXTENSIONES DE TRICEPS EN POLEA CON SOGA"}
                        sets={4} repetitions={"1 x 10-12 / 3 x 12-15"} rir={"0 o 1"} zone={Zone.TRICEPS} />

                    <Exercise exercisename={"PRESS EN MAQUINA"}
                        sets={3} repetitions={"12 a 15"} rir={"FALLO"} zone={Zone.CHEST} />
                </div>
            </div>
        </main>
    );
}

export default Monday;
