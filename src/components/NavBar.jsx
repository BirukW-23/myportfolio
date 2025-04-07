import React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="flex justify-between items-center border border-white dark:border-[#0b1625] backdrop-blur-xl fixed w-full px-6 py-5 z-50">
    <div className="flex items-center">
      <h3 className="bg-gradient-to-r from-cyan-300 to-emerald-800 bg-clip-text text-transparent font-bold px-4 sm:px-10 text-lg">
        Biruk Wondmeneh
      </h3>
    </div>
    <ul className="hidden md:flex gap-10 lg:gap-20 text-lg text-gray-700">
      <li>
        <a href="#about" className="cursor-pointer dark:text-white hover:text-gray-400 hover:transition-transform">
          About
        </a>
      </li>
      <li>
        <a href="#skill" className="cursor-pointer dark:text-white hover:text-gray-400 hover:transition-transform">
          Skills
        </a>
      </li>
      <li>
        <a href="#project" className="cursor-pointer dark:text-white hover:text-gray-400 hover:transition-transform">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="cursor-pointer dark:text-white hover:text-gray-400 hover:transition-transform">
          Contact
        </a>
      </li>
    </ul>

    <div className="flex items-center space-x-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-slate-600 dark:bg-cyan-100 text-white p-2 rounded-full hover:bg-slate-700 transition duration-300"
      >
        {darkMode ? <Sun className="dark:text-cyan-700" size={20} /> : <Moon size={20} />}
      </button>
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} className="text-gray-800 dark:text-white" /> : <Menu size={24} className="text-gray-800 dark:text-white" />}
        </button>
      </div>
    </div>
    {isMobileMenuOpen && (
      <div className="absolute top-[72px] left-0 w-full bg-white dark:bg-[#0b1625] flex flex-col items-center gap-6 py-6 md:hidden z-40 shadow-lg">
        <a href="#about" className="dark:text-white text-gray-800 hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>
          About
        </a>
        <a href="#skill" className="dark:text-white text-gray-800 hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>
          Skills
        </a>
        <a href="#project" className="dark:text-white text-gray-800 hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" className="dark:text-white text-gray-800 hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </a>
      </div>
    )}
  </div>
  );
}

export default NavBar;
