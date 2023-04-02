import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-violet-900 flex flex-col items-center justify-center py-5'>
        <p className='text-white text-center mx-3'>You can contact me from my social media accounts/ email or click contact me button to take token and I will contact later.</p>
        <div className='bg-violet-900 flex flex-row items-center justify-center p-5'>
            <a href='https://www.instagram.com/william25001/'><i className="bi bi-instagram text-3xl text-white mx-5"></i></a>
            <a href='https://www.facebook.com/www.waiyanwin/'><i className="bi bi-facebook text-3xl text-white mx-5"></i></a>
            <a href='https://github.com/williamMak25'><i className="bi bi-github text-3xl text-white mx-5"></i></a>
            <a href='mailto:waiyanwinlwin25@gmail.com'> <i className="bi bi-envelope-at text-3xl text-white mx-5"></i></a>
        </div>
    </div>
  )
}
