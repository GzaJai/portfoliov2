import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'

const ProjectWrapper = ({ projects }) => {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClick = (project) => {
    setOpen(true);
    setSelectedProject(project)
  }

  return (
    <>
      <div className='flex flex-col gap-4'>
          {
            projects.map((p) => (
                <ProjectCard key={p.id} onClick={() => handleClick(p)} projectName={p.title} projectUrl={p.url} imageUrl={p.image}/>
            ))
          }
      </div>
      <ProjectDialog isOpen={open} onClose={() => setOpen(false)} project={selectedProject}/>
    </>
  )
}

export default ProjectWrapper