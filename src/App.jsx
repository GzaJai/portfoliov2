import { useState, useEffect } from 'react';
import './App.css'
import CustomLink from './components/CustomLink'
import ProjectCard from './components/ProjectCard';
import dataFromJson from './data.json'
import ProjectWrapper from './components/ProjectWrapper';
import { AnimatedBackground } from './components/AnimatedBackground';
import { motion } from 'framer-motion';
import AnimatedLink from './components/AnimatedLink';
import Linkedin from './components/icons/Linkedin';
import Github from './components/icons/Github';
import CV from './components/icons/CV';
import ContactForm from './components/ContactForm'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (dataFromJson) {
      setProjects(dataFromJson[0].projects)
    }
  }, []);
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id='home' className='w-full'>
        <header className={`duration-200 rounded-b-2xl w-[80%] ${scrolled ? "backdrop-blur-md" : "mt-4"}`}>
            <div className='flex h-20 w-full px-20 items-center justify-between'>
              <div className='max-md:hidden'>
                <img className='w-20  bg-indigo-400 p-[.1rem] rounded-full max-md:hidden' src='https://raw.githubusercontent.com/GzaJai/portfoliov2/refs/heads/master/public/yo-portfolio.png'/>
                <p className='ml-10 w-[18rem] text-4xl font-bold'>Gonzalo Jaime</p>
              </div>
              <nav className="flex w-full items-center justify-center z-50">
                <li><CustomLink text={"About"} href={"#about"} /></li>
                <li><CustomLink text={"Projects"} href={"#projects"} /></li>
                <li><CustomLink text={"Contact"} href={"#contact"} /></li>
              </nav>
            </div>
        </header>
      </section>
      <main>
        <section>
          <div className="flex flex-col my-54 items-center gap-4">
            <img className='w-60 bg-indigo-500/40 p-4 rounded-full backdrop-blur-glass backdrop-filter backdrop-blur-md' src='https://raw.githubusercontent.com/GzaJai/portfoliov2/refs/heads/master/public/yo-portfolio.png' />
            <h2 className='text-2xl font-bold'>Gonzalo Jaime</h2>
            <h3 className='text-2xl font-semibold mt-2'>Developer</h3>
            <div className='flex w-[50%] justify-center gap-4 mt-8'>
              <AnimatedLink href={"https://www.linkedin.com/in/gjaimeguinazu/"}>
                <Linkedin width={'64'} height={'64'} stroke={'#7c86ff'} strokeWidth={'1.5'}/>
              </AnimatedLink>
              <AnimatedLink href={"https://github.com/GzaJai"}>
                <Github width={'64'} height={'64'} stroke={'#7c86ff'} strokeWidth={'1.5'}/>
              </AnimatedLink>
            </div>
          </div>
          
        </section>
        <section id='about' className='mb-48'>
          <h3 className='w-[60%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>About me</h3>
          <div className="w-[90%] mx-auto bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent backdrop-blur-md rounded-[39px] shadow-2xl p-12">
            <div className='flex flex-col w-full gap-3'>
                <p>Hello, I'm Gonzalo Jaime. A full-stack developer from Argentina. </p>
                <p>Currently I'm studying at the University, but I have done some development courses that give me a pretty solid stack.</p>
                <p>I got some experience as a freelancer as well. I've done some projects for myself to improve and reinforce my skills, and some other to sell.</p>
                <p className='text-center font-semibold pt-8 pb-4'>checkout my CV!</p>
              </div>
              <AnimatedLink className={'mx-auto w-full'} href={"https://drive.google.com/file/d/1redMsxAEaUpyPs-slkqpAG9fZxGjFUbX/view?pli=1"}>
                <CV width={'64'} height={'64'} stroke={'#ffffffde'} strokeWidth={'1.5'} />
              </AnimatedLink>
          </div>

        </section>
        <section id="projects" className='mt-10'>
          <h3 className='w-[60%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>Projects</h3>
          <ProjectWrapper projects={projects}/>
        </section>
        <section id='#contact' className='my-18'>
          <ContactForm />
        </section>
      </main>
    </>
  )
}

export default App
