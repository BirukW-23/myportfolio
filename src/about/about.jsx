import React from "react";
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-20 bg-white dark:bg-gray-900"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white">
          About
          <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent"> Me</span>
        </h2>
        <div className="w-24 h-1 bg-emerald-500 rounded-full mx-auto mt-4" />
      </div>
      <p className="text-center max-w-3xl text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-16 px-2">
        I'm a developer passionate about building innovative solutions. I enjoy tackling complex problems
        and turning ideas into reality through clean, efficient code. My goal is to create software
        that makes a positive impact.
      </p>
      <AboutCard />
    </section>
  );
}

export default About;
