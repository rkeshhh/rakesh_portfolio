
import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md p-4 flex justify-between items-center z-50 shadow-md">
      <h1 className="text-2xl font-bold text-[#64ffda]">Salugu Rakesh</h1>
      <ul className="flex gap-6 text-white">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-[#64ffda] transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
