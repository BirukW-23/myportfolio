import React from "react";
import AboutCard from "../components/AboutCard";
function about() {
  return (
    <div id="about" className="flex flex-col justify-center items-center gap-10 px-4 sm:px-6 py-10">
      <div className="grid gap-4 text-center">
        <h2 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-black dark:text-white">
          About <span className="  bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent"> Me</span>
        </h2>
        <span className=" border-b-4 border-emerald-600 w-1/2 rounded-sm text-center mx-auto justify-normal"></span>
      </div>
      <p className="text-gray-600 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-3xl">
        I'm a developer passionate about building innovative solutions. I enjoy
        tacking complex problems and turning ideas into reality through clean ,
        efficent code. My goal is to create software that makes a positive
        impact{" "}
      </p>
      <div className="flex ml-40">
     <AboutCard/>
     </div>
    </div>
  );
}

export default about;
