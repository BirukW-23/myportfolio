import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import image1 from "../assets/pro3.png";
import image2 from "../assets/project1.png";
import image3 from "../assets/pro1.png";
import image4 from "../assets/pro2.png";
import image5 from "../assets/crafted.png/";
import image6 from "../assets/gilbertin.png/";
import image7 from "../assets/project2.png";
import image8 from "../assets/project7.png";
import image9 from "../assets/project8.png";

function ProjectCard() {
  const projects = [
    {
      id: 1,
      image: image1,
      title: "Top Movie Landing Page",
      demoLink: "ethio-gym.netlify.app",
      description:
        "Is a dedicated webpage designed to promote an upcoming or released film. It provides essential details about the movie, engages visitors with visually appealing content, and encourages them to watch the film or stream it online.",
      language: ["Html", "Css"],
      color: "bg-emerald-500",
    },
    {
      id: 2,
      image: image2,
      title: "Ethiopian Fitness Gym",
      demoLink: "https://ethio-gym.netlify.app/",
      description:
        "A modern and responsive landing page designed for an Ethiopian fitness gym. The website highlights the gym’s services, class schedules, membership plans, and contact information with a clean layout and engaging visuals.",
      language: ["Html", "Css", "JavaScript"],
      color: "bg-cyan-500",
    },
    {
      id: 3,
      image: image3,
      title: "Job Border Website",
      demoLink: "ethio-gym.netlify.app",
      description:
        "A job board website is an online platform that connects job seekers with employers by listing job openings across various industries. It serves as a digital marketplace where employers can post job opportunities.",
      language: ["React", "Tailwind", "Express", "PostgreSQL"],
      color: "bg-rose-500",
    },
    {
      id: 4,
      image: image4,
      title: "Agricultural support",
      demoLink: "ethio-gym.netlify.app",
      description:
        "An agricultural support website is an online platform designed to assist farmers, agribusinesses, and agricultural professionals by providing resources, tools, and information to improve productivity.",
      language: ["Html", "Bootstrap", "Php", "MySQL"],
      color: "bg-orange-500",
    },
    {
      id: 5,
      image: image5,
      title: "Crafted-BY-Her",
      demoLink: "https://crafted-by-her.onrender.com/",
      description:
        "An e-commerce website for women to sell handmade products is a specialized online platform designed to empower female artisans, crafters, and entrepreneurs by providing them with a digital marketplace.",
      language: ["React.js", "Tailwindcss", "Node.js", "Express.js", "MongoDb"],
      color: "bg-pink-500",
    },
    {
      id: 6,
      image: image6,
      title: "Gilbertin Website",
      demoLink: "https://kansainvalinentyo.com/",
      description:
        "A website for visa consultancy services is an online platform designed to help individuals and businesses navigate the complex process of visa applications, immigration, and travel documentation.",
      language: ["React.js", "Tailwindcss", "shadcn"],
      color: "bg-blue-500",
    },
    {
      id: 7,
      image: image7,
      title: "Yab Chemicals Website",
      demoLink: "https://www.yabchemicals.com/",
      description:
        "A professional website for Yab Chemicals, a chemical manufacturing company. The site showcases company products, services, and industry expertise. It includes interactive sections upon product details.",
      language: ["React", "TypeScript", "TailwindCSS"],
      color: "bg-indigo-500",
    },
    {
      id: 8,
      image: image8,
      title: "Rent Agreement System",
      demoLink: "https://aahrams.onrender.com/",
      description:
        "A Rent Agreement Management System is a fully digital and end-to-end platform designed to manage rental agreements efficiently and securely. The system allows landlords, tenants, and administrators to manage agreements.",
      language: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
      color: "bg-purple-500",
    },
    {
      id: 9,
      image: image9,
      title: "Rent Management System",
      demoLink: "https://act.com.et/",
      description:
        "Architected and developed a comprehensive rent management system for Atlas Computer Technology. System handles property listings, tenant management, payment processing, maintenance requests, and reporting.",
      language: ["Next.js", "Tailwind CSS", "Java", "Spring boot", "PostgreSQL"],
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="flex flex-col gap-20 p-6 max-w-[95%] mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
        >
          {/* Image Section */}
          <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 h-[250px] md:h-[350px]">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Content Section */}
          <div className={`w-full lg:w-2/5 flex flex-col gap-5 items-start text-left ${index % 2 === 1 ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
            }`}>
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:text-white">
              {project.title}
            </h3>

            {/* Description Card */}
            <div
              className="p-5 rounded-lg shadow-md relative z-20 w-full bg-[#0b1625] dark:bg-slate-800 text-gray-300 dark:text-gray-300 text-left border border-gray-800 min-h-[140px] flex flex-col justify-center"
            >
              <p className="text-sm md:text-base leading-relaxed font-light opacity-95">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className={`flex flex-wrap gap-3 justify-start ${index % 2 === 1 ? "" : "lg:justify-end"
              } w-full`}>
              {project.language.map((lang, idx) => (
                <span
                  key={idx}
                  className="text-gray-600 dark:text-gray-300 font-medium text-xs md:text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                aria-label="View Project"
              >
                <ArrowTopRightOnSquareIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;
