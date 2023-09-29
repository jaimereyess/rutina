import Link from "next/link"

const Sidebar = () => {
    return (
        <div className="bg-black h-screen-ful">
            <nav className={`flex flex-col text-white border rounded-xl`}>

                <div className="flex-1">
                    <ul className="space-y-2 p-4">
                        <li>
                            <Link href="/" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/monday" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Lunes
                            </Link>
                        </li>
                        <li>
                            <Link href="/tuesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Martes
                            </Link>
                        </li>
                        <li>
                            <Link href="/wednesday" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Míercoles
                            </Link>
                        </li>
                        <li>
                            <Link href="/thursday" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Jueves
                            </Link>
                        </li>
                        <li>
                            <Link href="/friday" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-700">
                                Viernes
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Sidebar;

