import React from "react";
import image1 from "../assets/pro3.png";
import image2 from "../assets/project1.png";
import image3 from "../assets/pro1.png";
import image4 from "../assets/pro2.png";
import image5 from "../assets/crafted.png/"
import image6 from "../assets/gilbertin.png/"
function ProjectCard() {
  const projects = [
    {
      id: 1,
      image: image1,
      title: "Top Movie Landing Page",
      demoLink: "ethio-gym.netlify.app",
      description:
        "Is a dedicated webpage designed to promote an upcoming or released film. It provides essential details about the movie, engages visitors with visually appealing content, and encourages them to watch the film or stream it online.",
      language: {
        language1: "Html",
        language2: "Css",
      },
    },
    {
      id: 2,
      image: image2,
      title: "Ethiopian Fitness Gym Landing Page",
      demoLink: "https://ethio-gym.netlify.app/",
      description:
        "A modern and responsive landing page designed for an Ethiopian fitness gym. The website highlights the gym’s services, class schedules, membership plans, and contact information with a clean layout and engaging visuals. Built with a focus on user experience and mobile responsiveness, the site helps promote the gym’s brand and attract new clients.",
      language: {
        language1: "Html",
        language2: "Css",
        language3: "javascript",
      },
    },
    {
      id: 3,
      image: image3,
      title: "Job Border Website",
      demoLink: "ethio-gym.netlify.app",
      description:
        "A job board website is an online platform that connects job seekers with employers by listing job openings across various industries. It serves as a digital marketplace where employers can post job opportunities, and job seekers can browse, apply, and track job applications.",
      language: {
        language1: "React",
        language2: "Tailwind",
        language3: "Express",
        language4: "Postgress",
      },
    },
    {
      id: 4,
      image: image4,
      title: "Agricultural support",
      demoLink: "ethio-gym.netlify.app",
      description:
        "An agricultural support website is an online platform designed to assist farmers, agribusinesses, and agricultural professionals by providing resources, tools, and information to improve productivity, sustainability, and profitability.",
      language: {
        language1: "Html",
        language2: "Bootstrap",
        language3: "Php",
        language4: "Mysql",
      },
    },
    {
      id: 5,
      image: image5,
      title: "Crafted-BY-Her",
      demoLink: "https://crafted-by-her.onrender.com/",
      description:
        "An e-commerce website for women to sell handmade products is a specialized online platform designed to empower female artisans, crafters, and entrepreneurs by providing them with a digital marketplace to showcase and sell their unique creations.",
      language: {
        language1: "React.js",
        language2: "Tailwindcss",
        language3: "Node.js",
        language4: "Express.js",
        language5: "MongoDb"
      },
    },
    {
      id: 6,
      image: image6,
      title: "Gilbertin Website",
      demoLink: "https://kansainvalinentyo.com/",
      description:
        "A website for visa consultancy services is an online platform designed to help individuals and businesses navigate the complex process of visa applications, immigration, and travel documentation. Here’s a detailed description of what such a website should include:.",
      language: {
        language1: "React.js",
        language2: "Tailwindcss",
        language3: "shadcn",
      },
    }
  ];
  return (
    <div className="grid gap-7 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-[#000813] rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col"
        >
          <div className="h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full  object-scale-down transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {project.title}
            </h3>
            <p className=" text-gray-600 text-lg mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.values(project.language).map((lang, index) => (
                <span
                  key={index}
                  className="bg-cyan-100 dark:bg-slate-800 text-cyan-700 px-2 py-1 rounded dark:text-cyan-300"
                >
                  {lang}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                className="border border-emerald-500 bg-slate-50 dark:text-cyan-300 dark:bg-slate-900 text-cyan-700 hover:text-black rounded-lg px-5 py-1"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
