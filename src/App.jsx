import React, { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import About from "./about/about";
import Skill from "./skill/skill";
import Project from "./project/project";
import Contact from "./contact/contact";
import Footer from "./components/Footer";

function App() {
  const roles = ["Fullstack Developer", "Photographer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NavBar />

      <div className="flex flex-col">
        <section
          id="hero"
          className="flex flex-col gap-8 justify-center items-center min-h-screen px-4 text-center"
        >
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Biruk Wondmeneh
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl font-medium transition-all duration-500">
            I am a{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              {roles[currentRole]}
            </span>
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mt-2">
            Creating impactful digital experiences and capturing memorable
            moments.
          </p>

          <div className="flex gap-4 flex-wrap justify-center mt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 px-7 py-3 text-white font-medium shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#project"
              className="border-2 border-emerald-500 text-cyan-600 dark:text-cyan-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/10 rounded-lg px-7 py-3 font-medium transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex flex-col items-center mt-12 animate-bounce">
            <span className="text-gray-500 dark:text-gray-400 text-sm ">
              Scroll Down
            </span>
            <a href="#about">
              <ChevronDoubleDownIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </a>
          </div>
        </section>
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
