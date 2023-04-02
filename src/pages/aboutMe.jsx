import Aos from 'aos';
import React, { useEffect } from 'react';
import code from '../image/coding.png'
export const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])
  return (
    <>
    <img src={code} alt='codephoto' className='mb-0 w-96 h-72 mx-auto max-[395px]:w-52 max-[395px]:h-36 max-[395px]:mt-[-50px] '/>
    <div className='flex flex-col items-center bg-violet-900 text-white p-14 h-screen m-0 text-center
                    max-[395px]:p-0 '>
        <h2 className='text-3xl text-center mt-20 my-5 max-[395px]:text-xl' data-aos='fade-down'>I'm Wai Yan Win Lwin. Nice to meet you.</h2>
        <p className='w-3/4 text-center mt-5 text-lg font-thin leading-9 max-[395px]:text-sm ' data-aos='zoom-in'>I am skilled Front-End Developer in creating responsive and user-friendly web
            applications. My expertise includes developing websites using HTML, CSS, JavaScript, and front-end frameworks
            such as React. In addition to my technical skills, I am a team player with excellent communication skills.</p>
       
    </div>
    </>
  )
}
