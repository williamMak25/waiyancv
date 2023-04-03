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
    <div className='flex flex-col justify-start items-center p-3 m-0 pb-0
                    max-[430px]:text-sm max-[430px]:p-0 max-[430px]:h-screen max-[430px]:justify-center max-[430px]:w' >
        <h1 className='text-6xl text-center my-5 py-2 px-3 rounded-3xl hover:bg-violet-900 hover:text-white
                      max-[430px]:text-4xl max-[430px]:px-0 max-[395px]:text-center max-[430px]:my-0
                      max-[430px]:hover:non'data-aos='fade-left'>Frontend,React Developer</h1>
        <p className='text-xl
                      max-[430px]:text-sm' data-aos='fade-right'>Writing code and actively create new thing.</p>
        <img src={profile} alt='profile' className='bg-violet-400 rounded-full w-72 h-72 mt-10 my-2
                                                    max-[430px]:w-40 max-[430px]:h-40 max-[430px]:mx-0'data-aos='fade-up'/>
        
    </div>
    <AboutMe/>
    <Skill/>
    <Projects/>
    <Footer/>
    </>
  )
}
