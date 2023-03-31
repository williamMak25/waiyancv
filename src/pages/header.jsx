import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Logo from '../image/logo.png'
import { NavLink } from 'react-router-dom'
import '../App.css'

export const Header = () => {
  const [menuClass,setMenuClass] = useState('displayOff');
  const [isMenuClicked,setMenuClicked] = useState(false);

 const handleClick = () =>{
  if(!isMenuClicked){
    setMenuClass('buggerBar');
   }
   else{
    setMenuClass('displayOff')
   }
   setMenuClicked(!isMenuClicked);
 }
  return (
    <>
    <nav className='flex flex-row  list-none justify-between items-end p-3 m-0 max-[780px]:hidden max-[414px]:p-0'>
        <div className='mx-28 my-5'>
            <NavLink to='/'><img src={Logo}alt='logo' className='w-12 h-12 text-violet-900'/></NavLink>
        </div>
        <div className='mx-28 my-5'>
           <NavLink to='/contact'><button className='text-violet-900 text-xl py-1 px-3 rounded-2xl 
            border border-violet-900 hover:bg-violet-900 hover:text-white'>Contact Me</button></NavLink>
        </div>
    </nav>
    <div className='sticky top-1 left-5 p-2 min-[780px]:hidden'>
      <FontAwesomeIcon icon={faBars} className='w-12 h-10 text-yellow-400' onClick={handleClick}/>
    </div>
    <div className={menuClass}>
      <p className="bi bi-arrow-left-circle m-0" onClick={handleClick}></p>
      <div className='sideBarInfo overflow-hidden bg-violet-900'>
        <li className='list-none m-3'onClick={handleClick}><NavLink to="/" className='no-underline text-dark'>Home</NavLink></li>
        <li className='list-none m-3'onClick={handleClick}><a href='#projects' className='no-underline text-dark'>Projects</a></li>
        <li className='list-none m-3'onClick={handleClick}><NavLink to="/contact" className='no-underline text-dark'>Contact Me</NavLink></li>
      </div>
    </div>
    </>
  
  )
}
