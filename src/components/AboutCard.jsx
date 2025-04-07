import React from 'react'
import {AcademicCapIcon,ShoppingBagIcon,RocketLaunchIcon} from '@heroicons/react/24/outline';
import { GraduationCap ,BriefcaseBusiness, Instagram ,Facebook } from 'lucide-react';
function AboutCard() {
    const informations = [
       {
        id:1,
        icon:<GraduationCap className="w-10 h-10 text-emerald-950 dark:text-emerald-300" />,
        title:'Education',
        description:'Computer Science graduate with focus on web technologies and software engineering'
       },
       {
        id:2,
        icon:<BriefcaseBusiness className="w-10 h-10 text-[#007AFF] " />,
        title:'Experiance',
        description:'Worked on various projects focusing on frontend and backend development'
       },
       {
        id:3,
        icon: <RocketLaunchIcon className="w-10 h-10 text-red-500" />,
        title:'Passion',
        description:'Dedicated to continuous learning and staying updated with the latest technologies'
       }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-8 px-4 sm:px-6 lg:px-20 py-10">
    {informations.map((card) => (
      <div key={card.id} className="border bg-white dark:bg-[#000813] dark:border-none shadow-xl transtion-all duration-300 hover:scale-110 rounded-xl p-6 flex flex-col items-center text-center mx-auto w-full max-w-sm">
        <div className="mb-4 p-4 bg-[#E0F0FF] rounded-full">{card.icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:text-white">
        {card.title}
      </h3>
        <p className="text-gray-600 dark:text-cyan-50 text-sm sm:text-base mt-2">{card.description}</p>
      </div>
    ))}
  </div>
  )
}

export default AboutCard