import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-md p-4 flex justify-between items-center z-50 shadow-md">
            <h1 className="text-xl sm:text-2xl font-bold text-[#64ffda]">Salugu Rakesh</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-white">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-[#64ffda] transition"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
                {menuOpen ? (
                    <FaTimes
                        size={24}
                        onClick={toggleMenu}
                        className="cursor-pointer text-[#64ffda]"
                    />
                ) : (
                    <FaBars
                        size={24}
                        onClick={toggleMenu}
                        className="cursor-pointer text-[#64ffda]"
                    />
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-[#0a192f] flex flex-col items-center gap-6 py-6 text-white md:hidden">
                    {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={toggleMenu}
                                className="hover:text-[#64ffda] transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
