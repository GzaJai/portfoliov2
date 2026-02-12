import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import CircleArrowDown from './icons/CircleArrowDown'
import CircleArrowUp from './icons/CircleArrowUp'

const ProjectWrapper = ({ projects, seeAllText, seeLessText, lang }) => {
  const [showAll, setShowAll] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClick = (project) => {
    setOpen(true);
    setSelectedProject(project)
  }

  const handleSeeAll = () => {
    showAll ? setShowAll(false) : setShowAll(true);
  }

  return (
    <>
      <div className='flex flex-col gap-4'>
          {
            projects
              .slice(0, showAll ? projects.length : 2)
              .map((p) => (
                  <ProjectCard key={p.id} onClick={() => handleClick(p)} projectName={p.translations[lang].title} projectUrl={p.url} imageUrl={p.image}/>
              ))
          }
          {showAll ?
            <button onClick={handleSeeAll} className='flex flex-col mx-auto w-[40%] items-center gap-4 p-2 rounded-lg font-bold text-xl'>
                <CircleArrowUp width={'48'} height={'48'} stroke={'#ffffde'} strokeWidth={'1.5'} />
              {seeLessText}
            </button>
            :
            <button onClick={handleSeeAll} className='flex flex-col mx-auto w-[40%] items-center gap-4 p-2 rounded-lg font-bold text-xl'>
                <CircleArrowDown width={'48'} height={'48'} stroke={'#ffffde'} strokeWidth={'1.5'} />
              {seeAllText}
            </button>
          }
      </div>
      <ProjectDialog isOpen={open} onClose={() => setOpen(false)} project={selectedProject} lang={lang} />
    </>
  )
}

export default ProjectWrapper