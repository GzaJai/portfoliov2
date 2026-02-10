import React from 'react'

const ProjectCard = ({ projectName, projectUrl, imageUrl }) => {
  return (
    <div className="w-[90%] mx-auto bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent backdrop-blur-md rounded-[39px] shadow-2xl p-8">
        <div className='flex items-center justify-between mb-8'>

            <h4 className='text-center font-bold text-xl'>{projectName}</h4>
            <a href={projectUrl}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffffde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                </svg>
            </a>
        </div>
        <img src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${imageUrl}.png`} alt="" />
    </div>
  )
}

export default ProjectCard