import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            className={`lg:w-20 bg-black text-2xl h-screen ${menuOpen ? "lg:w-64" : ""}`}
        >
            <nav className={`lg:grid ${menuOpen ? "grid" : "hidden"}`}>
                <ul className="p-4">
                    <li className="mt-4">
                        <Link
                            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md font-semibold"
                            to="/monday"
                        >
                            {menuOpen ? "Lunes" : "L"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link
                            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md font-semibold"
                            to="/tuesday"
                        >
                            {menuOpen ? "Martes" : "M"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link
                            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md font-semibold"
                            to="/wednesday"
                        >
                            {menuOpen ? "Miércoles" : "X"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link
                            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md font-semibold"
                            to="/thursday"
                        >
                            {menuOpen ? "Jueves" : "J"}
                        </Link>
                    </li>
                    <li className="mt-4">
                        <Link
                            className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md font-semibold"
                            to="/friday"
                        >
                            {menuOpen ? "Viernes" : "V"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
