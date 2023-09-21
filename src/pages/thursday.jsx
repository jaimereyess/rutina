import Nav from "../Components/nav";
import LeterDays from "../Components/days";
import Exercise from "../Components/exercise";
import Zone from "../Components/zoneExercise";

function Thursday() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white pb-2">
      <Nav />
      <LeterDays day="Jueves" />
      <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">

        <Exercise exercisename={"PRESS INCLINADO EN MULTIPOWER"}
          sets={3} repetitions={"1 x 4-6  /  2 x 6-8"} rir={"2 o 3"} zone={Zone.CHEST} />

        <Exercise exercisename={"REMO T"}
          sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} zone={Zone.BACK} />

        <Exercise exercisename={"PRESS BANCA CON MANCUERNAS"}
          sets={3} repetitions={"1 x 8-10  /  2 x 10-12"} rir={"1 o 2"} zone={Zone.CHEST} />

        <Exercise exercisename={"JALÓN AGARRE NEUTRO"}
          sets={3} repetitions={"10 - 12"} rir={"1 o 2"} zone={Zone.BACK} />

        <Exercise exercisename={"CURL MARTILLO"}
          sets={5} repetitions={"1 x 10-12  /  3 x 12-15 / DS "} rir={"0 o 1"} zone={Zone.BICEPS} />

        <Exercise exercisename={"EXTENSIÓN DE TRICEPS UNILATERAL"}
          sets={4} repetitions={"1 x 10-12  /  3 x 12-15 "} rir={"0 o 1"} zone={Zone.TRICEPS} />

      </div>
    </div>
  );
}

export default Thursday;
