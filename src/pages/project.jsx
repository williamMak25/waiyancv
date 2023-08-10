import React, { useEffect } from 'react'
import laptop from '../image/laptop.png';
import movie from '../image/movie.png'
import recipe from '../image/recipe.png'
import weather from '../image/weather.jpg'
import programmer from '../image/programmer.png'
import '../App.css';
import Aos from 'aos';

export const Projects = () => {
  const myprojects = [
    {title:"Ecommerce App",
    body:"Ecommerce fully responsive App with Reactjs,BootStrap and firebase authentication.For state management I'm using Redux/toolkit",
    url:"https://re-modified-vercel-shop-app.vercel.app/",
    github_url:"https://github.com/williamMak25/ReModified__VercelShop__App/tree/main",
    img_url:laptop
    },
    {title:"Movie IMDB",
    body:"IMDB App with Reactjs(This is not responsive)",
    url:"https://movie-project-sooty-seven.vercel.app/",
    github_url:"https://github.com/williamMak25/Movie-project/tree/main",
    img_url:movie
    },
    {title:"Recipe App",
    body:"Showing any recipe you type and what can u do with these to get meal or dessert.",
    url:"https://recipe-app-six-sable.vercel.app/",
    github_url:"https://github.com/williamMak25/Recipe-APP/tree/main",
    img_url:recipe
    },
    {title:"DailyWeather",
    body:"Ecommerce fully responsive App with Reactjs,BootStrap and firebase authentication.For state management I'm using Redux/toolkit",
    url:"https://daily-weather-app-teal.vercel.app/",
    github_url:"https://github.com/williamMak25/DailyWeatherApp/tree/master",
    img_url:weather
    }

  ]
  useEffect(()=>{
    Aos.init({
      duration: 1000
    });
  },[])
  return (
    <>
    <div className='mt-5 bg-violet-900 mb-0 p-5' id='projects'>
      <div className='mb-0 mt-[-80px] bg-violet-900 flex flex-col justify-center items-center p-3 rounded'>

        <div className='flex flex-col items-center'>
          <img src={programmer} alt='programmer' className='w-32 h-32 mt-14'/>
          <h1 className='text-center text-xl p-3 text-white'>These are my recent PROJECTS</h1>
          <p className='text-white'>They are only deployed App and you can check more in my gitHub account.</p>
        </div>
            
        <div className='bg-violet- grid grid-cols-2 gap-4 items-center mt-3 p-5 max-[415px]:grid max-[460px]:grid-cols-1'>

          {myprojects.map( item =>{
            return(
          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-right' : 'fade-up' }>
            <p className='text-white text-center mb-2'>{item.title}</p>
            <div className='w-full bg-white h-[355px] text-center rounded-lg p-2 relative shadow mb-2 flex flex-col justify-center'>
              
              <img src={item.img_url} className="rounded-xl"/>
              <div className='text-gray absolute top-0 left-0 flex flex-col justify-center items-center w-full h-[355px] text-center rounded-lg p-5 hidden-div hover:backdrop-blur-lg'>
                  <p className='mt-5 mb-2'>{item.title}</p>
                  <p>{item.body}</p>
              </div>
            </div>
            <a href={item.github_url}><i className="bi bi-github text-white m-3 text-xl "></i></a>
            <a href={item.url}><i className="bi bi-box-arrow-up-right text-white m-3 text-xl"></i></a>
          </div>
            )
          })}
          
        </div>
      </div>
    </div>
    </>
  )
}
