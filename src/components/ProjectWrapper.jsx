import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectWrapper = ({ projects }) => {
  return (
    <div className='flex flex-col gap-4'>
        {
            projects.map((p) => (
              <ProjectCard key={p.id} projectName={p.title} projectUrl={p.url} imageUrl={p.image}/>
            ))
        }
    </div>
  )
}

export default ProjectWrapper