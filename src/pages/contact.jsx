
import React from 'react'
import contact from '../image/contact.jpg'

export const Contact = () => {
  return (
    <div className='flex flex-row justify-center align-items-center max-[420px]:flex-col max-[420px]:py-5 '>
     
      <div className='mx-14 max-[420px]:mx-2'>
        <img src={contact} className='w-96 h-80 bg-black max-[420px]:w-40 max-[420px]:h-36 max-[420px]:mx-auto'/>
        <p className='text-center max-[420px]:mb-12'>Are you ready to build your project with me.</p>
      </div>
      {/*..............contact form..........*/}
      
      <form className='bg-violet-900 p-5 rounded-xl h-full text-white mx-14 max-[420px]:mx-2 max-[420px]:w-auto max-[420px]:mb-10'>
        <div className='mb-3'>
        <span className='text-4xl text-yellow-300  '>Let's start </span><span>talk with me..!</span>
        </div>

        <label for='email' className='block text-xl mb-2 '>Email</label>
        <input type='email' className='w-80 mb-3 rounded-md text-black p-1 outline-0 '/>

        <label for='name' className='block mb-2 text-xl'>Your Name</label>
        <input type='text' className='w-80 mb-3 rounded-md text-black p-1 outline-0 '/>

        <label for='message' className='block mb-2 text-xl '>Message</label>
        <textarea className='mb-3 w-full h-36 rounded-br-xl text-black p-1 outline-0 '/>

        <button className='block bg-yellow-300 text-violet-900 p-2 rounded-b-xl'>Submit Request</button>
      </form>
      <p className='min-[420px]:hidden text-center'><i className="bi bi-c-circle"></i> Copyrightandallrightreservedbywaiyan</p>
    </div>
  )
}
