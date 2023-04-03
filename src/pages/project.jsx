import React, { useEffect } from 'react'
import laptop from '../image/laptop.png';
import phone from '../image/phone.png';
import movie from '../image/movie.png'
import recipe from '../image/recipe.png'
import social from '../image/social.png'
import weather from '../image/weather.jpg'
import programmer from '../image/programmer.png'
import '../App.css';
import Aos from 'aos';

export const Projects = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000
    });
  },[])
  console.log( window.screen.width)
  return (
    <>
    <div className='mt-5 bg-violet-900 mb-0 p-5' id='projects'>
      <div className='mb-0 mt-[-80px] bg-violet-900 flex flex-col justify-center items-center p-3 rounded'>

        <div className='flex flex-col items-center'>
          <img src={programmer} alt='programmer' className='w-32 h-32 mt-14'/>
          <h1 className='text-center text-xl p-3 text-white underline underline-offset-8'>These are my recent PROJECTS</h1>
        </div>
            
        <div className='bg-violet- grid grid-cols-3 gap-4 items-center mt-3 p-5 max-[415px]:grid max-[460px]:grid-cols-1'>

          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-right' : 'fade-up' }>
            <p className='text-green-300 text-center mb-2'>Ecommerce App</p>
            <div className='w-full bg-white h-52 text-center rounded-lg p-2 border border-zinc-900 relative shadow mb-2'>
              <div className='flex flex-row'>
                <img src={laptop} className='w-1/2'/>
                <img src={phone} className='w-1/2'/>
              </div>
              <p>vercelShop.com</p>
              <div className='absolute top-0 left-0 w-full h-full text-center rounded-lg p-5 items-center hidden-div hover:backdrop-blur'>
                  <p className='mt-5 mb-2'>vercelShop.com</p>
                  <p>Ecommerce fully responsive App with Reactjs,BootStrap and firebase authentication.For state management I'm using Redux/toolkit</p>
              </div>
            </div>
            <a href='https://github.com/williamMak25/ReModified__VercelShop__App/tree/main'><i className="bi bi-github text-white mx-3 text-xl"></i></a>
            <a href='https://re-modified-vercel-shop-app.vercel.app/'><i className="bi bi-box-arrow-up-right text-white mx-3 text-xl"></i></a>
          </div>

          
          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-left' : 'fade-up' }>
          <p className='text-green-300 text-center mb-2'>Movie IMDB</p>
          
            <div className='w-full h-52 text-center rounded-lg p-2 relative mb-2'
                style={{backgroundImage:`url(${movie})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover',
                        opacity: 0.8}}>
            
              <div className='absolute top-0 left-0 w-full h-full text-amber-500 text-center rounded-lg p-5 hidden-div hover:backdrop-blur'>
                  <p className='mt-5 mb-2'>MovieIMDB</p>
                  <p>IMDB App with Reactjs(This is not responsive)</p>
              </div>
            </div>
            <a href='https://github.com/williamMak25/Movie-project/tree/main'><i className="bi bi-github text-white m-3 text-xl"></i></a>
            <a href='https://movie-project-sooty-seven.vercel.app/'><i className="bi bi-box-arrow-up-right text-white m-3 text-xl"></i></a>
          </div>
         

          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-right' : 'fade-up' }>
            <p className='text-green-300 text-center mb-2'>Recipe App</p>
            <div className='w-full bg-neutral-200 h-52 text-center rounded-lg p-2 border border-zinc-900 relative shadow mb-2'
                style={{backgroundImage:`url(${recipe})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover',
                        opacity: 0.8}}>
            
           
              <div className='absolute top-0 left-0 w-full h-full text-center rounded-lg p-5 items-center hidden-div hover:backdrop-blur'>
                  <p className='mt-5 mb-2'>RecipeApp</p>
                  <p>Showing any recipe you type and what can u do with these to get meal or dessert.</p>
              </div>
            </div>
            <a href='https://github.com/williamMak25/Recipe-APP/tree/main'><i className="bi bi-github text-white m-3 text-xl"></i></a>
            <a href='https://recipe-app-six-sable.vercel.app/'><i className="bi bi-box-arrow-up-right text-white m-3 text-xl"></i></a>
          </div>

          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-left' : 'fade-up' }>
            <p className='text-green-300 text-center mb-2'>ConNet SocialApp</p>
            <div className='w-full bg-neutral-800 h-52 text-center text-white rounded-lg p-2 relative shadow mb-2'
            style={{backgroundImage:`url(${social})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover',
                        opacity: 0.8}}>
            
         
              
              <div className='absolute top-0 left-0 w-full h-full text-center rounded-lg p-5 items-center hidden-div hover:backdrop-blur'>
                  <p className='mt-5 mb-2'>ConNet</p>
                  <p>This is my last project and i also using React and Firebase for the whole project.
                     In these app you can post,comment and chat with registered people.</p>
              </div>
            </div>
            <a href='https://github.com/williamMak25/Social-App/tree/master'><i className="bi bi-github text-white m-3 text-xl"></i></a>
            <a href='https://connet-app.vercel.app/'><i className="bi bi-box-arrow-up-right text-white m-3 text-xl"></i></a>
          </div>

          <div className='' data-aos={(window.screen.width <= 414) ? 'fade-right' : 'fade-up' }>
            <p className='text-green-300 text-center mb-2'>DailyWeather</p>
            <div className='w-full bg-white h-52 text-center rounded-lg p-2  relative shadow mb-2'
            style={{backgroundImage:`url(${weather})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover',
                        opacity: 0.8}}>
            
              
              <div className='absolute top-0 left-0 w-full h-full text-center rounded-lg p-5 items-center hidden-div hover:backdrop-blur'>
                  <p className='mt-5 mb-2'>DailyWeatherApp</p>
                  <p>Build with React and open weather api to show daily weather of current location
                    Or any location you search.And also use ipInfo api to know  your  device current location.</p>
              </div>
            </div>
            <a href='https://github.com/williamMak25/DailyWeatherApp/tree/master'><i className="bi bi-github text-white m-3 text-xl "></i></a>
            <a href='https://daily-weather-app-teal.vercel.app/'><i className="bi bi-box-arrow-up-right text-white m-3 text-xl"></i></a>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
