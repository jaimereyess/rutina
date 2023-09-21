import Nav from "../Components/nav";
import LeterDays from "../Components/days";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card"

function HomePage() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white">
      <Nav />
      <LeterDays day="HomePage" />
    </div>
  );
}

export default HomePage;
