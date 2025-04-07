import React from 'react'
import { Linkedin ,Github, Instagram ,Facebook } from 'lucide-react';
function Footer() {
  return (
    <div className='bg-white dark:bg-[#000813] shadow-lg px-5 py-4'>
        <div className='flex justify-between items-center'>
            <div className='ml-5'>
                <span className='text-gray-600 text-lg md:text-1xl max-w-1xl'> &copy; {new Date().getFullYear()} Biruk Wondmeneh. All rights reserved.</span>
            </div>
            <div className="flex gap-8 mr-4">
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Github />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Linkedin />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Facebook />
  </a>
  <a href="#" className="text-gray-400 hover:text-emerald-700 dark:hover:text-cyan-300 transition duration-300 transform hover:scale-110">
    <Instagram />
  </a>
            </div>
        </div>
    </div>
  )
}

export default Footer