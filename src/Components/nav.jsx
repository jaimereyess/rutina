import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-darkpurple p-6 text-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/rutina" className="font-bold text-xxl tracking-tight text-white">
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
            }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/monday"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 py-2"
            >
              Lunes
            </Link>
            <Link
              to="/tuesday"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 py-2"
            >
              Martes
            </Link>
            <Link
              to="/wednesday"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 py-2"
            >
              Miércoles
            </Link>
            <Link
              to="/thursday"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 py-2"
            >
              Jueves
            </Link>
            <Link
              to="/friday"
              className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white py-2"
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
