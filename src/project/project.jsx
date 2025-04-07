import React from 'react'
import ProjectCard from '../components/ProjectCard'

function project() {
  return (
    <div id='project' className="flex flex-col justify-center items-center gap-10 mb-5">
      <div className="grid gap-6 ">
        <h2 className=" bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent text-7xl">
           Projects
        </h2>
        <span className=" border-b-4 border-emerald-600 w-1/3 rounded-sm text-center mx-auto justify-normal"></span>
      </div>
      <ProjectCard/>
    </div>
  )
}

export default project