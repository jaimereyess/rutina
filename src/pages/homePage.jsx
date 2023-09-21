import Sidebar from "../Components/sidebar";
import LeterDays from "../Components/days";
import { buttonVariants } from "../Components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" min-h-screen bg-darkgrey text-white">
      <Sidebar />
      <LeterDays day="HomePage" />
      <div className="text-center mt-4">

        <Link className={buttonVariants({ variant: "ghost" }) + " p-10 rounded-md"} to="/monday">Lunes</Link>

      </div>
      <h1 className="text-blue-600sla">HOlaaa</h1>

    </div>
  );
}

export default HomePage;
