import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO at TechStart",
            content:
                "Biruk is an exceptional developer who transformed our vision into reality. His attention to detail and technical expertise are unmatched.",
            rating: 5,
        },
        {
            id: 2,
            name: "David Chen",
            role: "Creative Director",
            content:
                "Working with Biruk on our photography portfolio was a breeze. He understands both the artistic and technical sides of web development.",
            rating: 5,
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Marketing Manager",
            content:
                "The website redesign significantly increased our user engagement. Biruk's modern design approach is exactly what we needed.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
                        Client <span className="text-cyan-600 dark:text-cyan-400">Testimonials</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my clients have to say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-cyan-600 dark:text-cyan-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
