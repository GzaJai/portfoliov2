import React, { useState } from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import CloseIcon from './icons/CloseIcon'
import LinkIcon from './icons/LinkIcon'
import Github from './icons/Github'
import Tooltip from './Tooltip'

const ProjectDialog = ({ isOpen, onClose, project, lang }) => {

    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-1000 ${isOpen ? 'visible bg-black/40' : 'invisible'}`}>
            <div onClick={e => e.stopPropagation()} className={`bg-slate-900/94 w-[95%] rounded-xl shadow p-6 transition-all md:h-[80%] md:w-[70%] ${isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`} >
            
            {
                project &&
                <div className='flex flex-col gap-3'>
                    <div className='flex w-[90%] mx-auto justify-between'>
                        <h3 className='text-xl font-semibold'>{project.translations[lang].title}</h3>
                        <a href={project.url}>
                        </a>
                        <span onClick={onClose}>
                            <CloseIcon width={'38'} height={'38'}/>
                        </span>
                    </div>
                    
                    {/* Mobile */}
                    <div className='flex flex-col md:hidden'>
                        <img src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${project.image}.png`} alt="" />
                    
                        <div className='flex w-full mx-auto justify-around py-4'>
                            <Tooltip textContent={'Repository'}>
                                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                                    <Github width={32} height={32} stroke={'#ffffff'} strokeWidth={'2'} />
                                </a>
                            </Tooltip>
                            <Tooltip textContent={'Website'}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon width={32} height={32} stroke={'#ffffff'} strokeWidth={'2'} />
                                </a>
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
                                <p className='w-[90%] mx-auto text-lg font-semibold'>{project.translations[lang].purpose}</p>
                            </AccordionItem>
                            <AccordionItem title="Development">
                                <div className="relative w-[90%] mx-auto">
                                    <div className="max-h-40 w-[95%] mx-auto overflow-y-auto pr-2 pb-12 no-scrollbar">
                                        <p className="text-lg font-semibold">
                                            {project.translations[lang].development_process}
                                        </p>
                                    </div>
                                    <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-lg h-12 bg-linear-to-t from-black/30 to-transparent" />
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Desktop */}
                    <div className='hidden md:flex md:flex-col gap-4'>
                        <div className='flex gap-6 justify-around'>
                            <div className='w-[45%]'>
                                <img className='w-full rounded-lg' src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${project.image}.png`} alt="" />
                            </div>

                            <div className='w-[45%] '>
                                <Accordion>
                                    <AccordionItem title={'Stack'}>
                                        <ul className="grid grid-cols-2 w-[80%] mx-auto gap-x-6 gap-y-1">
                                        {project.stack.map((t) => (
                                            <li className='font-semibold text-lg' key={t}>➧ {t}</li>
                                        ))}
                                        </ul>
                                    </AccordionItem>
                                    <AccordionItem title={'Purpose'}>
                                        <p className='w-[90%] mx-auto text-lg font-semibold'>{project.translations[lang].purpose}</p>
                                    </AccordionItem>
                                    <AccordionItem title="Development">
                                        <div className="relative w-[90%] mx-auto">
                                            <div className="max-h-40 w-[95%] mx-auto overflow-y-auto pr-2 pb-12 no-scrollbar md:max-h-60">
                                                <p className="text-lg font-semibold">
                                                    {project.translations[lang].development_process}
                                                </p>
                                            </div>
                                            <div className="pointer-events-none absolute bottom-0 left-0 w-full rounded-lg h-12 bg-linear-to-t from-black/30 to-transparent md:hidden" />
                                        </div>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className='absolute bottom-20 left-0 right-0 flex w-full justify-center gap-24 pt-4'>
                            <Tooltip textContent={'Repository'}>
                                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                                    <Github width={64} height={64} stroke={'#ffffff'} strokeWidth={'2'} />
                                </a>
                            </Tooltip>
                            <Tooltip textContent={'Website'}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon width={64} height={64} stroke={'#ffffff'} strokeWidth={'2'} />
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            }

            </div>
        </div>        
    )
}

export default ProjectDialog