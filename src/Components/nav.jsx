import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6 text-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/rutina" className="font-bold text-3xl tracking-tight text-white">
            Rutina
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "" : "hidden"
            }`} >

          <div>
            {/*//variant ghost => hover:bg-accent hover:text-accent-foreground
            //variant secondary => bg - secondary text - secondary - foreground hover: bg - secondary / 80*/}
            <Link
              className={`${buttonVariants({
                variant: location.pathname === "/monday" ? "secondary" : "ghost",
                size: "icon",
                navButtons: "nav",
              })} hover:bg-accent hover:text-accent-foreground`}
              to="/monday"
            >
              Lunes
            </Link>

            <Link
              className={`${buttonVariants({
                variant: location.pathname === "/tuesday" ? "secondary" : "ghost",
                size: "icon",
                navButtons: "nav",
              })}`}
              to="/tuesday"
            >
              Martes
            </Link>

            <Link
              className={`${buttonVariants({
                variant: location.pathname === "/wednesday" ? "secondary" : "ghost",
                size: "icon",
                navButtons: "nav",
              })} `}
              to="/wednesday"
            >
              Miércoles
            </Link>

            <Link
              className={`${buttonVariants({
                variant: location.pathname === "/thursday" ? "secondary" : "ghost",
                size: "icon",
                navButtons: "nav",
              })}`}
              to="/thursday"
            >
              Jueves
            </Link>

            <Link
              className={`${buttonVariants({
                variant: location.pathname === "/friday" ? "secondary" : "ghost",
                size: "icon",
                navButtons: "nav",
              })}`}
              to="/friday"
            >
              Viernes
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
