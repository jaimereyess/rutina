import LeterDays from "../Components/days";
import Nav from "../Components/nav";
import { buttonVariants } from "../Components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white">
      <Nav />
      <LeterDays day="HomePage" />
      <div className="text-center mt-4">

        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/monday">Lunes</Link>
        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/tuesday">Martes</Link>
        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/wednesday">Miércoles</Link>
        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/thursday">Jueves</Link>
        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/friday">Viernes</Link>


      </div>

    </div>
  );
}

export default HomePage;
