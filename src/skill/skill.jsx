import React from "react";
import SkillCard from "../components/SkillCard";
function skill() {
  return (
    <div id="skill" className="flex flex-col justify-center items-center gap-10 px-4 sm:px-6 py-10">
      <div className="grid gap-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          Skill & <span className="  bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent"> Technologies</span>
        </h2>
        <span className=" border-b-4 border-emerald-600 w-1/4 rounded-sm text-center mx-auto justify-normal"></span>
      </div>
      <SkillCard />
    </div>
  );
}

export default skill;
