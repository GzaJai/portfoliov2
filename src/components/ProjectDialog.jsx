import React, { useState } from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import CloseIcon from './icons/CloseIcon'
import LinkIcon from './icons/LinkIcon'
import Github from './icons/Github'
import Tooltip from './Tooltip'

const ProjectDialog = ({ isOpen, onClose, project }) => {  

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-1000 ${isOpen ? 'visible bg-black/40' : 'invisible'}`}>
            <div onClick={e => e.stopPropagation()} className={`bg-slate-900/94 w-[95%] rounded-xl shadow p-6 transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`} >
            
            {
                project &&
                <div className='flex flex-col gap-3'>
                    <div className='flex w-[90%] mx-auto justify-between'>
                        <h3 className='text-xl font-semibold'>{project.title}</h3>
                        <a href={project.url}>
                        </a>
                        <span onClick={onClose}>
                            <CloseIcon width={'38'} height={'38'}/>
                        </span>
                    </div>
                    <img src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${project.image}.png`} alt="" />
                    <div className='flex w-1/2 mx-auto justify-around pb-4'>
                        <Tooltip textContent={'Repository'}>
                            <Github width={32} height={32} stroke={'#ffffff'} strokeWidth={'2'} />
                        </Tooltip>
                        <Tooltip textContent={'Website'}>
                            <LinkIcon width={32} height={32} stroke={'#ffffff'} strokeWidth={'2'} />
                        </Tooltip>
                    </div>
                    <Accordion>
                        <AccordionItem title={'Stack'}>
                            <ul className="grid grid-cols-2 w-[80%] mx-auto gap-x-6 gap-y-1">
                            {project.stack.map((t) => (
                                <li className='font-semibold text-lg' key={t}>➧ {t}</li>
                            ))}
                            </ul>
                        </AccordionItem>
                        <AccordionItem title={'Purpose'}>
                            <p className='w-[90%] mx-auto text-lg font-semibold'>{project.purpose}</p>
                        </AccordionItem>
                        <AccordionItem title="Development">
                            <div className="relative w-[90%] mx-auto">
                                
                                <div className="max-h-40 w-[95%] mx-auto overflow-y-auto pr-2 pb-12">
                                    <p className="text-lg font-semibold">
                                        {project.development_process}
                                    </p>
                                </div>

                                <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-lg h-12 bg-linear-to-t from-black/30 to-transparent" />
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            }

            </div>
        </div>        
    )
}

export default ProjectDialog