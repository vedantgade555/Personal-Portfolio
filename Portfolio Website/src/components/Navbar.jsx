import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold text-white flex items-baseline">
            Vedant <span className="text-purple ml-2">Gade</span>
            <div className="w-4 h-4 bg-purple rounded-full ml-1"></div>
          </a>
        </div>

        <div className="hidden md:flex space-x-10">
          <a href="#home" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Home</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full "></span>
          </a>
          <a href="#about" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>About</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>
           <a href="#education" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Education</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>
          <a href="#skills" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Skills</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>
          <a href="#projects" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Projects</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>
          <a href="#experience" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Experience</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>
          <a href="#contact" className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple py-3">
            <span>Contact</span>
            <span className="w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full mb-1"></span>

          </a>

        </div>

        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col gap-6 text-center justify-center">
          <a href="#home" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Home</span>
          </a>
          <a href="#about" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>About</span>
          </a>
          <a href="#education" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Education</span>
          </a>
          <a href="#skills" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Skills</span>
          </a>
          <a href="#projects" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Projects</span>
          </a>
          <a href="#experience" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Experience</span>
          </a>
          <a href="#contact" onClick={() => setShowMenu(false)} className="flex flex-col items-center group text-white/80 transition duration-300 hover:text-purple">
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;