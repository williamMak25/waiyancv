import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Logo from '../image/logo.png'
import menu from '../image/menu.jpg'
import { NavLink } from 'react-router-dom'
import '../App.css'

export const Header = ({isMenuOpen,setIsMenuOpen}) => {
  const [menuClass,setMenuClass] = useState('displayOff');
  const [isMenuClicked,setMenuClicked] = useState(false);

 const handleClick = () =>{
  setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open", !isMenuOpen);
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
    <nav className='flex z-20 flex-row list-none justify-between items- p-2 m-0 max-[414px]:p-0 max-[480px]:hidden'>
      <div className='mx-28 my-2'>
            <NavLink to='/'><img src={Logo}alt='logo' className='w-12 h-12 text-violet-900'/></NavLink>
        </div>
        <div className='mx-28 my-2'>
           <NavLink to='/contact'><button className='text-violet-900 text-xl py-1 px-3 rounded-2xl 
            border border-violet-900 hover:bg-violet-900 hover:text-white'>Contact Me</button></NavLink>
        </div>
    </nav>
    <div className='sticky top-0 left-0 overflow-hidden z-10 p-2 min-[780px]:hidden'>
      <FontAwesomeIcon icon={faBars} className='w-12 h-10 text-yellow-400 z-40' onClick={handleClick}/>
      <div className={menuClass}> 
        <div className='sideBarInfo bg-violet-500'>
          <img src={menu}/> 
          <li className='list-none m-3'onClick={handleClick}><NavLink to="/" className='no-underline text-dark'>Home</NavLink></li>
          <li className='list-none m-3'onClick={handleClick}><a href='#projects' className='no-underline text-dark'>Projects</a></li>
          <li className='list-none m-3'onClick={handleClick}><NavLink to="/contact" className='no-underline text-dark'>Contact Me</NavLink></li>
        </div>
      </div>
    </div>
    
    
    </>
  
  )
}
