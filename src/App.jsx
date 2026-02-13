import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import CustomLink from './components/CustomLink'
import dataFromJson from './data.json'
import ProjectWrapper from './components/ProjectWrapper';
import AnimatedLink from './components/AnimatedLink';
import Linkedin from './components/icons/Linkedin';
import Github from './components/icons/Github';
import CV from './components/icons/CV';
import ContactForm from './components/ContactForm'
import ScrollToTop from './components/ScrollToTop';
import TranslationBtn from './components/TranslationBtn';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([])
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    const handleScroll = () => {
          if (window.scrollY > 300) {
              setShowScrollTop(true)
          } else {
              setShowScrollTop(false)
          }
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, []);
    
    return (
      <>
      <AnimatePresence mode="popLayout">
        <section id='home' className='w-full'>
          <header className={`duration-200 rounded-b-2xl w-[90%] ${scrolled ? "backdrop-blur-md" : "mt-4"}`}>
            <div className='flex h-20 w-full px-20 items-center justify-between'>
              <div className='max-md:hidden flex items-center gap-4'>
                <div className='w-20 h-20 flex items-center justify-center'>
                  {scrolled && (
                    <motion.img 
                      layoutId="profile-image"
                      className='w-16 h-16 bg-indigo-500/40 p-[.1rem] rounded-full' 
                      src='https://raw.githubusercontent.com/GzaJai/portfoliov2/refs/heads/master/public/yo-portfolio.png'
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </div>
                <p className='text-4xl font-bold'>Gonzalo Jaime</p>
              </div>
              <nav className="flex w-full items-center justify-center z-50">
                <li><CustomLink text={t("nav.about")} href={"#about"} /></li>
                <li><CustomLink text={t("nav.projects")} href={"#projects"} /></li>
                <li><CustomLink text={t("nav.contact")} href={"#contact"} /></li>
              </nav>
            </div>
          </header>
        </section>

      <main>
        <section id='hero'>
          <div className="flex flex-col my-54 items-center gap-4">
            <div className='w-60 h-60 flex items-center justify-center'>
              {!scrolled && (
                <motion.img 
                  layoutId="profile-image"
                  className='w-60 h-60 bg-indigo-500/40 p-4 rounded-full backdrop-blur-glass backdrop-filter backdrop-blur-md' 
                  src='https://raw.githubusercontent.com/GzaJai/portfoliov2/refs/heads/master/public/yo-portfolio.png'
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              )}
            </div>
            <h2 className='text-2xl font-bold'>Gonzalo Jaime</h2>
            <h3 className='text-2xl font-semibold mt-2'>{t("developer")}</h3>
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
          <h3 className='w-[60%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>{t("aboutMe.title")}</h3>
          <div className="w-[90%] mx-auto bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent backdrop-blur-md rounded-[39px] shadow-2xl p-12">
            <div className='flex flex-col w-full gap-3'>
                <p>{t("aboutMe.text1")}</p>
                <p>{t("aboutMe.text2")}</p>
                <p>{t("aboutMe.text3")}</p>
                <p className='text-center font-semibold pt-8 pb-4'>{t("aboutMe.cvText")}</p>
              </div>
              <AnimatedLink className={'mx-auto w-full'} href={"https://drive.google.com/file/d/1redMsxAEaUpyPs-slkqpAG9fZxGjFUbX/view?pli=1"}>
                <CV width={'64'} height={'64'} stroke={'#ffffffde'} strokeWidth={'1.5'} />
              </AnimatedLink>
          </div>

        </section>
        <section id="projects" className='mt-10'>
          <h3 className='w-[60%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>{t("projects.title")}</h3>
          <ProjectWrapper seeAllText={t("projects.seeAllBtn")} seeLessText={t("projects.seeLessBtn")} projects={projects} lang={i18n.language}/>
        </section>
        <section id='contact' className='my-18'>
          <ContactForm translationText={t("contact")} />
        </section>
        <section id='footer' className='w-full h-12 text-center'>
            <a href="https://www.linkedin.com/in/gjaimeguinazu/" target='_blank'>Gonzalo Jaime </a>
             - {t("footer")} ❤️
        </section>
        </main>
      </AnimatePresence>
      <ScrollToTop isVisible={showScrollTop} />
      <TranslationBtn />
    </>
  )
}

export default App
