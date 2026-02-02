import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
    const roles = ["Fullstack Developer", "Photographer", "Creator"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }

            if (!isDeleting && displayedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex, roles]);

    return (
        <section
            id="hero"
            className="flex flex-col gap-8 justify-center items-center min-h-screen px-4 text-center relative overflow-hidden"
        >
            {/* Background Elements - Now Global in App.jsx */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-white font-bold tracking-tight mb-4">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                        Biruk Wondmeneh
                    </span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <p className="text-gray-600 dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl font-medium h-12">
                    I am a{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 border-r-4 border-cyan-600 pr-1 animate-pulse">
                        {displayedText}
                    </span>
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed"
            >
                Creating impactful digital experiences and capturing memorable
                moments through code and lens.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-6 flex-wrap justify-center mt-8"
            >
                <a
                    href="#contact"
                    className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Get In Touch
                </a>
                <a
                    href="#project"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 rounded-full px-8 py-4 font-semibold text-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                    View My Work
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center animate-bounce"
            >
                <span className="text-gray-500 dark:text-gray-400 text-sm mb-2 uppercase tracking-widest">
                    Scroll Down
                </span>
                <a href="#about" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <ChevronDoubleDownIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
