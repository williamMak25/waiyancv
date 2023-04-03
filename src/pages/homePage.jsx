import Aos from 'aos';
import React, { useEffect } from 'react'
import profile from '../image/wai_yan_win_lwin__1_-removebg.png'
import { AboutMe } from './aboutMe';
import { Footer } from './footer';
import { Projects } from './project';
import { Skill } from './skill';
import { Header } from './header';

export const Home = ({isMenuOpen,setIsMenuOpen}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, [])
  return (
    <>
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    <div className='flex flex-col w-full justify-between items-center p-3 m-0 pb-0
                    max-[395px]:text-sm max-[395px]:p-0 max-[395px]:h-screen max-[395px]:justify-center max-[395px]:w' >
        <h1 className='text-6xl text-center my-5 py-2 px-3 rounded-3xl hover:bg-violet-900 hover:text-white
                      max-[395px]:text-4xl max-[395px]:px-0 max-[395px]:text-center max-[395px]:my-0
                      max-[395px]:hover:non'data-aos='fade-left'>Frontend,React Developer</h1>
        <p className='text-xl
                      max-[395px]:text-sm' data-aos='fade-right'>Writing code and actively create new thing.</p>
        <img src={profile} alt='profile' className='bg-violet-400 rounded-full w-72 h-72 mt-10 my-2
                                                    max-[395px]:w-40 max-[395px]:h-40 max-[395px]:mx-0'data-aos='fade-up'/>
        
    </div>
    <AboutMe/>
    <Skill/>
    <Projects/>
    <Footer/>
    </>
  )
}
