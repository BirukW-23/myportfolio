import React from "react"
import NavBar from '../src/components/NavBar'
import {ChevronDoubleDownIcon} from '@heroicons/react/24/outline';
import About from './about/about'
import Skill from './skill/skill'
import Project from "./project/project";
import Contact from "./contact/contact";
import Footer from "./components/Footer";
function App() {
  
  return (
    <div>
     <NavBar/>
     <div className="flex flex-col  gap-20">
     <div className=' flex flex-col  gap-8 justify-center items-center mt-60 '>
       <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white '>Hi, I'm <span className=' bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent'>Biruk Wondmeneh</span></h1>
       <p className='text-gray-600 text-2xl text-center dark:text-white'>A passionate developer focused on creating impactful digital <br /> experiences.</p>
       <div className='flex gap-4'>
         <a href='#contact' className='bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:bg-gradient-to-l bg-emerald-900 px-7 py-3 text-white'>Get In Touch</a>
         <a href='#project' className=' border border-emerald-500 bg-slate-50 text-cyan-500 hover:text-black to rounded-lg px-7 py-3'> View My Work</a>
       </div>
       <div className='flex flex-col gap-3'>
        <span className='text-center text-gray-500 animate-up-down'>Scroll Down</span>
       <a href="#about"><ChevronDoubleDownIcon className='w-8 h-8 text-cyan-600 ml-5 animate-up-down scroll-smooth'/></a> 
       </div>
    </div>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
