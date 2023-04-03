
import React, { useState } from 'react'
import contact from '../image/contact.jpg'
import { NavLink } from 'react-router-dom'

export const Contact = () => {
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');

  const handlesubmit = () =>{
    if(email === '' || name === '' || message === ''){
      alert('Please fill your information first')
    }else{
      alert('Thank your contact.I will be contact later')
    }
  }
  return (
    <>
    <div className='flex flex-row justify-around items-center mt-2'>
     <NavLink to='/'><p className='text-center my-2 rounded-full'><i className="bi bi-arrow-left-circle-fill text-xl text-violet-900">Home</i></p></NavLink> 
      <p className='text-xl text-violet-900'>Get Your <span className='text-3xl text-yellow-300'>Token</span></p>
    </div>
    <div className='flex flex-row p-10 justify-center align-items-center max-[1050px]:flex-col max-[1050px]:py-5 '>
     
      <div className='mx-14  max-[420px]:mx-2'>
        
        <img src={contact} className='w-96 h-80 bg-black max-[420px]:w-40 max-[420px]:h-36 max-[420px]:mx-auto'/>
        <p className='text-center max-[420px]:mb-10'>Are you ready to build your project with me.</p>
        
      </div>
      {/*..............contact form..........*/}
      
      <form onSubmit={handlesubmit}
      className='bg-violet-900 p-5 rounded-xl h-full text-white mx-14 max-[1050px]:mx-2 max-[1050px]:w-auto max-[1050px]:mx-10 max-[1050px]:mb-10'>
        <div className='mb-3'>
        <span className='text-4xl text-yellow-300  '>Let's start </span><span>talk with me..!</span>
        </div>

        <label for='email' className='block text-xl mb-2 '>Email</label>
        <input type='email' className='w-80 mb-3 rounded-md text-black p-1 outline-0 max-[1050px]:w-auto' value={email} onChange={e =>setEmail(e.target.value)}/>

        <label for='name' className='block mb-2 text-xl'>Your Name</label>
        <input type='text' className='w-80 mb-3 rounded-md text-black p-1 outline-0 max-[1050px]:w-auto' value={name} onChange={e =>setName(e.target.value)}/>

        <label for='message' className='block mb-2 text-xl '>Message</label>
        <textarea className='mb-3 w-full h-36 rounded-br-xl text-black p-1 outline-0 max-[1050px]:w-full' value={message} onChange={e =>setMessage(e.target.value)}/>

        <button className='block bg-yellow-300 text-violet-900 p-2 rounded-b-xl'>Submit Request</button>
      </form>
      <p className='min-[420px]:hidden text-center'><i className="bi bi-c-circle"></i> Copyrightandallrightreservedbywaiyan</p>
    </div>
    </>
  )
}
