
import Aos from 'aos'
import React, { useEffect } from 'react'
import computer from '../image/computer.png'
import html from '../image/html.png'
import css from '../image/css.png'
import js from '../image/js.png'
import reactjs from '../image/react.png'
import nextjs from '../image/nextjs.png'
import nodejs from '../image/nodejs.png'
import express from '../image/express.png'
import bootstrap from '../image/bootstrap.png'
import tailwind from '../image/tailwind.png'
import mui from '../image/mui.png'
import github from '../image/github.png'
import firebase from '../image/firebase.png'
import mongo from '../image/mongo.png'
export const Skill = () => {

    const mySkill =[
        {name:"HTML",img_url:html},
        {name:"CSS",img_url:css},
        {name:"JavaScript",img_url:js},
        {name:"BootStrap",img_url:bootstrap},
        {name:"Tailwind",img_url:tailwind},
        {name:"MUI",img_url:mui},
        {name:"React",img_url:reactjs},
        {name:"Nextjs",img_url:nextjs},
        {name:"Nodejs",img_url:nodejs},
        {name:"Express",img_url:express},
        {name:"Firebase",img_url:firebase},
        {name:"MongoDb",img_url:mongo},
        {name:"Github",img_url:github},
    ]


    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
  return (
    <div className='px-5 '>
        <div className='flex flex-col items-center bg-white mt-[-100px] p-5 max-[395px]:p-1'>
            <img src={computer} alt='computer'className='w-20 rounded mt-3'/>
            <h2 className='text-3xl my-5 text-violet-900'>Frontend Developer</h2>
            <p className='text-center px-3'data-aos="fade-bottom">I start this carrer from the first of 2022 and learning from beginning level. I have skills of HTML, CSS, JavaScript
                for Frontend. And then I start learning React Framwork for reducing working time and more effecient in work.I
                created some projects like e-commerce,Blog website, Weather App , Movie Clone app and Social Media app. Above skills
                are primary skill for me and I have any other Skills like CSS framework BootStrap and TailwindCSS, and data base like firebase.
            </p>
            <h2 className='my-7 text-3xl text-violet-900'>Dev Skills</h2>
            
            <div className='grid grid-cols-4 w-full justify-center items-center p-2 mb-20'>
                {mySkill.map( item =>{
                    return(
                <div className='w-full flex flex-col items-center my-5 justify-center p-3 h-20'>  
                    <img src={item.img_url} className='w-16'data-aos="fade-top" alt={item.name}/>
                </div>
                    )
                })}
                
                
            </div>       
        </div>
    </div>
  )
}
/*
<div className='w-full flex flex-row my-2 max-[395px]:mx-0'>
                    <label for="css" className=' w-28'>CSS</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'92%'}}> 92%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="js" className=' w-28'>JS</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-800"data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'75%'}}> 75%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="react" className=' w-28'>React</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'70%'}}> 70%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="bootstrap" className='w-28'>BootStrap</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'80%'}}> 80%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="tailwind" className='w-28'>Tailwind</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'90%'}}> 90%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="FireBase" className='w-28'>FireBase</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'93%'}}> 93%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="next" className='w-28'>Nextjs</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'30%'}}> 30%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="github" className='w-28'>GitHub</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'70%'}}> 70%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="github" className='w-28'>Nodejs</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'70%'}}> 70%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="github" className='w-28'>Nextjs</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'70%'}}> 70%</div>
                    </div>
                </div>
                <div className='w-full flex flex-row my-2'>
                    <label for="github" className='w-28'>MUI</label>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" data-aos="fade-right">
                        <div className="inline-block bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{width:'70%'}}> 70%</div>
                    </div>
                </div> */