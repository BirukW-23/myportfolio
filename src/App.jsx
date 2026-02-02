import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./about/about";
import Skill from "./skill/skill";
import Project from "./project/project";
import Testimonials from "./components/Testimonials";
import Contact from "./contact/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 bg-custom-grid transition-colors duration-300 min-h-screen relative overflow-hidden">
      <NavBar />

      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
