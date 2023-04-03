import Aos from 'aos';
import React, { useEffect } from 'react';
import code from '../image/coding.png'
import aboutme from '../image/aboutme.png'
export const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])
  return (
    <div>
    <img src={code} alt='codephoto' className='mb-0 w-96 h-72 mx-auto max-[430px]:w-52 max-[430px]:h-36 max-[430px]:mt'/>
    <div className='w-full flex flex-col items-center p-0 bg-violet-900 text-white p-14 h-screen m-0 text-center
                    max-[620px]:py-0 max-[620px]:m-0 '>
        <img src={aboutme} className='max-[395px]:w-32 max-[395px]:h-32 w-40 h-40 mt-4'/>
        <h2 className='text-xl text-center mt-10 my-2 max-[395px]:text-xl' data-aos='fade-down'> Nice to meet you. I'm <span className='text-yellow-300 text-2xl max-[430px]:block'>Wai Yan Win Lwin.</span></h2>
        <p className='text-center mt-5 text-lg font-thin leading-9 m-5 max-[395px]:text-sm max-[395px]:m-3' data-aos='zoom-in'>I am skilled Front-End Developer in creating responsive and user-friendly web
            applications. My expertise includes developing websites using HTML, CSS, JavaScript, and front-end frameworks
            such as React. In addition to my technical skills, I am a team player with excellent communication skills.</p>
       
    </div>
    </div>
  )
}
