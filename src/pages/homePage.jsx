import Nav from "../Components/nav";
import LeterDays from "../Components/days";
import Exercise from "../Components/exercise";
import Zone from "../Components/zoneExercise";

function HomePage() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white pb-2">
      <Nav />
      <LeterDays day="HomePage" />
    </div>
  );
}

export default HomePage;
