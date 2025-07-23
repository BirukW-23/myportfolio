import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

function AboutCard() {
  const informations = [
    {
      id: 1,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description:
        "Computer Science graduate with a focus on web technologies and software engineering.",
      gradient: "from-purple-500 to-blue-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      id: 2,
      icon: <BriefcaseBusiness className="w-8 h-8" />,
      title: "Experience",
      description:
        "Worked on multiple projects focused on both frontend and backend development.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      id: 3,
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Passion",
      description:
        "Dedicated to continuous learning and staying up-to-date with the latest technologies.",
      gradient: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-100 dark:bg-rose-900/20",
    },
  ];

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
      {informations.map((card) => (
        <div
          key={card.id}
          className={`group relative rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ${card.bgColor}`}
        >
          <div className="flex flex-col items-center text-center">
            <div
              className={`mb-5 p-4 rounded-full shadow-inner group-hover:scale-110 transform transition duration-300`}
            >
              {React.cloneElement(card.icon, {
                className: `w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`,
                
              })}
            </div>

            <h3
              className={`text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`}
            >
              {card.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutCard;
