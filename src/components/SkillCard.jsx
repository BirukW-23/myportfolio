import React, { useState } from "react";

function SkillCard() {
  const Tools = [
    {
      id: 1,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
      ),
      name: "Figma",
    },
    {
      id: 2,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
      ),
      name: "GitHub",
    },
    {
      id: 3,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
      ),
      name: "Git",
    },
    {
      id: 4,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
      ),
      name: "Vs Code",
    },
  ];
  const Backends = [
    {
      id: 1,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
      ),
      name: "Node Js",
    },
    {
      id: 2,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
      ),
      name: "Express Js",
    },
    {
      id: 3,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
      ),
      name: "php",
    },
    {
      id: 4,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
      ),
      name: "Mysql",
    },
    {
      id: 5,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
      ),
      name: "Postgresql",
    },
  ];
  const Frontends = [
    {
      id: 1,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
      ),
      name: "Html",
    },
    {
      id: 2,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
      ),
      name: "Css",
    },
    {
      id: 3,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      ),
      name: "Javascript",
    },
    {
      id: 4,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      ),
      name: "React",
    },
    {
      id: 5,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
      ),
      name: "Next js",
    },
    {
      id: 6,
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
      ),
      name: "Tailwindcss",
    },
  ];
  const [currentDisplay, setCurrentDisplay] = useState(Frontends);
  const handleFront = () => setCurrentDisplay(Frontends);
  const handleBack = () => setCurrentDisplay(Backends);
  const handleTool = () => setCurrentDisplay(Tools);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center px-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 border border-gray-300 rounded-sm bg-gray-100 mb-10 p-2 sm:p-0 dark:bg-slate-800 dark:border-none ">
          <button
            onClick={handleFront}
            className="px-4 sm:px-[50px] md:px-[100px] py-2 hover:bg-white dark:hover:bg-black dark:text-white rounded-sm text-sm sm:text-base "
          >
            Frontend
          </button>
          <button
            onClick={handleBack}
            className="px-4 sm:px-[50px] md:px-[100px] py-2 hover:bg-white dark:hover:bg-black dark:text-white rounded-sm text-sm sm:text-base"
          >
            Backend
          </button>
          <button
            onClick={handleTool}
            className="px-4 sm:px-[50px] md:px-[100px] py-2 hover:bg-white dark:hover:bg-black dark:text-white rounded-sm text-sm sm:text-base"
          >
            Tools
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10 px-4 sm:px-0">
        {currentDisplay.map((card) => (
          <div
            key={card.id}
            className="border bg-white dark:bg-[#000813] dark:border-none shadow-md transition-all duration-300 hover:scale-105 rounded-xl p-4 sm:p-6 flex flex-col gap-3 items-center text-center"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10">{card.icon}</div>
            <h3 className="text-sm sm:text-base md:text-lg dark:text-white lg:text-xl">
              {card.name}
            </h3>
            <span className=" border-b-4 w-1/2 border-cyan-600  rounded-sm text-center mx-auto justify-normal"></span>
            {/* <span className="hover:border-b-4 hover:border-emerald-600 hover:w-1/2 hover:rounded-sm hover:text-center hover:mx-auto hover:justify-normal"></span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
