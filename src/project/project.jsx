import React from 'react'
import ProjectCard from '../components/ProjectCard'

function project() {
  return (
    <div id='project' className="flex flex-col justify-center items-center gap-10 mb-5">
      <div className="grid gap-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <span className="border-b-4 border-emerald-600 w-1/4 rounded-sm text-center mx-auto justify-normal"></span>
      </div>
      <ProjectCard />
    </div>
  )
}

export default project