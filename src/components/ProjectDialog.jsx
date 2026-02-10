import React from 'react'

const ProjectDialog = ({ isOpen, onClose, project }) => {

    console.log(project);
    

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${isOpen ? 'visible bg-black/40' : 'invisible'}`}>
            <div onClick={e => e.stopPropagation()} className={`bg-slate-900 w-[95%] rounded-xl shadow p-6 transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`} >
            
            {
                project &&
                <div className='flex flex-col gap-4'>
                    <div className='flex w-[90%] mx-auto justify-between'>
                        <h3 className='text-xl font-semibold'>{project.title}</h3>
                        <a href={project.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>
                        </a>
                    </div>
                    <img src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${project.image}.png`} alt="" />
                    <p>{project.description}</p>
                </div>
            }

            </div>
        </div>        
    )
}

export default ProjectDialog