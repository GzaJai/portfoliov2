import React, { useState } from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import CloseIcon from './icons/CloseIcon'
import LinkIcon from './icons/LinkIcon'
import Github from './icons/Github'
import Tooltip from './Tooltip'

const ProjectDialog = ({ isOpen, onClose, project }) => {  

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${isOpen ? 'visible bg-black/40' : 'invisible'}`}>
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
                            * React
                            * Tailwindcss
                            * JavaScript
                            </AccordionItem>
                            <AccordionItem title={'Purpose'}>
                            Entretainment, practice
                            </AccordionItem>
                            <AccordionItem title={'Development'}>
                            Started with some research of other dev's portfolios for some inspo. 
                            Then I design the structure of it...
                        </AccordionItem>
                    </Accordion>
                </div>
            }

            </div>
        </div>        
    )
}

export default ProjectDialog