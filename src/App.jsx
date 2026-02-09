import { useState, useEffect } from 'react';
import './App.css'
import CustomLink from './components/CustomLink'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id='home'>
        <header className={`duration-200 ${scrolled ? "backdrop-blur-md" : "mt-4"}`}>
            <div className='flex h-20 w-full px-20 items-center justify-between'>
              <div className='max-md:hidden'>
                <img className='w-20  bg-indigo-400 p-[.1rem] rounded-full max-md:hidden' src='/public/yo-portfolio.png'/>
                <p className='ml-10 w-[18rem] text-4xl font-bold'>Gonzalo Jaime</p>
              </div>
              <nav className="flex w-full items-center justify-between z-50">
                <li><CustomLink text={"Home"} href={"#home"} /></li>
                <li><CustomLink text={"About"} href={"#about"} /></li>
                <li><CustomLink text={"Contact"} href={"#contact"} /></li>
              </nav>
            </div>
        </header>
      </section>
      <main>
        <section>
          <div className="flex flex-col my-54 items-center gap-4">
            <img className='w-60 bg-indigo-400/40 p-4 rounded-full backdrop-blur-glass backdrop-filter backdrop-blur-md' src='/public/yo-portfolio.png'/>
            <h2 className='text-2xl font-bold'>Gonzalo Jaime</h2>
            <h3 className='text-2xl font-semibold'>Developer</h3>
            <div className='flex w-[50%] justify-center gap-4'>
              <a target='_blank' href="https://www.linkedin.com/in/gjaimeguinazu/">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#7c86ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
              <a target='_blank' href="https://github.com/GzaJai">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#7c86ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                  >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>


          </div>
          
        </section>
        <section id='about'>
          <div className="w-[90%] mx-auto bg-gray-500/15 backdrop-blur-glass rounded-[39px] shadow-2xl p-12 backdrop-filter backdrop-blur-md">
            <h3 className='w-[90%] mx-auto mb-7 font-bold text-3xl text-indigo-300 md:w-[50%]'>About me</h3>
            <div className='flex flex-col w-full gap-3'>
                <p>Hello, I'm Gonzalo Jaime. A full-stack developer from Argentina. </p>
                <p>Currently I'm studying at the University, but I have done some development courses that give me a pretty solid stack.</p>
                <p>I got some experience as a freelancer as well. I've done some projects for myself to improve and reinforce my skills, and some other to sell.</p>
              </div>
          </div>
        </section>
        <section id='contact'>
          <p>Contacto</p>
          <div className='flex w-[80%] mx-auto mb-32 text-[#333] items-start md:w-[60%] md:mb-52'>
              <form id="form" className='bg-indigo-400 rounded-lg flex flex-col items-center mx-auto p-8 w-[90%]'>
                  <div className="p-4 flex flex-col w-[90%]">
                      <label for="from_name" className='font-bold'>Name</label>
                      <input type="text" name="from_name" id="from_name" className='h-8 rounded-md max-w-60 p-3' />
                  </div>
                  <div className="p-4 flex flex-col w-[90%]">
                      <label for="reply_to" className='font-bold'>Email</label>
                      <input type="text" name="reply_to" id="reply_to" className='h-8 rounded-md max-w-60 p-3' />
                  </div>
                  <div className="p-4 flex flex-col w-[90%]">
                      <label for="message" className='font-bold'>Message</label>
                      <input type="text" name="message" id="message" className='h-24 rounded-md p-3' />
                  </div>

                  <input type='submit' id="button" className='font-bold bg-indigo-200 hover:bg-orange-500 hover:text-white duration-150 hover:cursor-pointer rounded-lg p-4' />
              </form>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
