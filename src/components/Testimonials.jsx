/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Ermiyas Solomon",
            role: "Senior Software Engineer",
            company: "Safricom Ethiopia",
            content:
                "Biruk is a dedicated and talented software developer with strong skills in React and modern frontend technologies. He approaches challenges with a problem-solving mindset and consistently delivers clean, well-structured solutions. He’s reliable, eager to learn, and a pleasure to work with.",
            rating: 5,
        },
        {
            id: 2,
            name: "Samson Admasu",
            role: "Lead Senior Developer",
            company: "Atlas Computer Technology",
            content:
                "He has been good at collaborating and adapting to new technologies. He worked with us at Atlas Computer Technology for about 5 months as an internship and job, and he worked on the rent management system project. His technical skills and team-oriented approach are impressive.",
            rating: 5,
        },
        {
            id: 3,
            name: "Tsegaye",
            role: "Senior Developer",
            company: "Perago System",
            content:
                "I had the opportunity to work with Biruk Wondmeneh and observe his approach to software development. He demonstrates a strong understanding of core software engineering principles, writes clean and maintainable code, and approaches problems with a logical and structured mindset. Biruk is highly motivated, adapts quickly to new technologies, and takes ownership of his responsibilities",
            rating: 5,
        },
        {
            id: 4,
            name: "Biniyam",
            role: "Senior Developer",
            company: "Atlas Computer Technology",
            content:
                "Biruk is a very good developer. We have worked together where I was a team leader and he was a frontend developer. His attention to detail and ability to implement complex UI requirements is exceptional",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
                        Client <span className="text-cyan-600 dark:text-cyan-400">Testimonials</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my clients have to say about working with me.
                    </p>
                </motion.div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <div className="flex gap-8 w-max animate-marquee pause-on-hover">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="w-[350px] md:w-[450px] bg-white/100 dark:bg-gray-800/100 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex-shrink-0"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed line-clamp-4">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-cyan-600 dark:text-cyan-400">
                                                {testimonial.role}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
