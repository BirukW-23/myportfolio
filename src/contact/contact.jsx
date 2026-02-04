import React from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Linkedin, Github, Instagram } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <EnvelopeIcon className="w-6 h-6 text-white" />,
      title: 'Email',
      description: 'birukwondmeneh@gmail.com',
      color: 'bg-emerald-500'
    },
    {
      id: 2,
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      title: 'Location',
      description: 'Addis Ababa, Ethiopia',
      color: 'bg-teal-500'
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
            Get In <span className="text-cyan-600 dark:text-cyan-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="flex gap-6 mb-12">
          {[
            { icon: <Github size={24} />, href: "https://github.com/BirukW-23" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/biruk-wondmeneh-634090235/" },
            { icon: <Instagram size={24} />, href: "https://www.instagram.com/biruk2337/" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-center gap-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className={`p-4 rounded-full ${contact.color} shadow-lg shadow-cyan-500/20`}>
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{contact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{contact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <form className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>

              <div>
                <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white placeholder-gray-400 transition-all" placeholder="Your Name" required />
              </div>

              <div>
                <input type="email" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white placeholder-gray-400 transition-all" placeholder="Your Email" required />
              </div>

              <div>
                <textarea className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white placeholder-gray-400 transition-all" placeholder="Your Message" required ></textarea>
              </div>

              <button type="submit" className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;