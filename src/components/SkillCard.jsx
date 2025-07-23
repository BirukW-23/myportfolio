import React, { useState } from "react";

function SkillCard() {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const categories = {
    frontend: [
      {
        id: 1,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        name: "HTML5",
      },
      {
        id: 2,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        name: "CSS3",
      },
      {
        id: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        name: "JavaScript",
      },
      {
        id: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        name: "React",
      },
      {
        id: 5,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
      },
      {
        id: 6,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
      },
    ],
    backend: [
      {
        id: 1,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        name: "Node.js",
      },
      {
        id: 2,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
        name: "Express",
      },
      {
        id: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        name: "PHP",
      },
      {
        id: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
      {
        id: 5,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
      },
    ],
    tools: [
      {
        id: 1,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        name: "Figma",
      },
      {
        id: 2,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        name: "GitHub",
      },
      {
        id: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        name: "Git",
      },
      {
        id: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        name: "VS Code",
      },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          My <span className="text-cyan-500">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-lg">
          Technologies and tools I use to create amazing digital experiences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === category
                  ? "bg-white dark:bg-slate-700 shadow-sm text-cyan-600 dark:text-cyan-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories[activeTab].map((skill) => (
          <div
            key={skill.id}
            className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white text-center">
              {skill.name}
            </h3>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;