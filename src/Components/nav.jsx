import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-darkpurple p-6 text-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" className="font-bold text-xxl tracking-tight text-white">
            Rutina
          </a>
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
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="Monday"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Lunes
            </a>
            <a
              href="Tuesday"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Martes
            </a>
            <a
              href="Wednesday"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Miercoles
            </a>
            <a
              href="Thursday"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Jueves
            </a>
            <a
              href="Friday"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Viernes
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
