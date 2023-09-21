import Nav from "../Components/nav";
import LeterDays from "../Components/days";
import Exercise from "../Components/exercise";
import Zone from "../Components/zoneExercise";

function Tuesday() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white pb-2">
      <Nav />
      <LeterDays day="Martes" />
      <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

        <Exercise exercisename={"REMO CON BARRA"}
          sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"2 o 3"} zone={Zone.BACK} />

        <Exercise exercisename={"DOMINADAS CON AYUDAS"}
          sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} zone={Zone.BACK} />

        <Exercise exercisename={"CURL DE BICEPS CON BARRA W"}
          sets={5} repetitions={"1 x 10-12  /  3 x 12-15  /  DS"} rir={"0 o 1"} zone={Zone.BICEPS} />

        <Exercise exercisename={"PREDICADOR CON MANCUERNAS"}
          sets={4} repetitions={"1 x 10-12  /  3 x 12-15"} rir={"0 o 1"} zone={Zone.BICEPS} />

        <Exercise exercisename={"REMO EN MÁQUINA"}
          sets={3} repetitions={"10 - 12"} rir={"1 o 2"} zone={Zone.BACK} />

        <Exercise exercisename={"REMO GIRONDA"}
          sets={3} repetitions={"15 - 20"} rir={"0 o FALLO"} zone={Zone.BACK} />

        <Exercise exercisename={"SÓLESOS"}
          sets={6} repetitions={"15 - 20"} rir={"0 o FALLO"} zone={Zone.CALVES} />
      </div>
    </div>
  );
}

export default Tuesday;
