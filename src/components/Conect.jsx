import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'
import Navbar from './Navbar'

const Connect = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-center' strings={['Connect']} typeSpeed={50} backSpeed={75} />
      </div>
      <div className='flex justify-center items-center mt-12 px-4' >
        <div className='w-full max-w-lg shadow-xl p-4 my-4 rounded-lg bg-white'>
          <form action="https://formsubmit.co/e1525ca675047508e95eec499f1db5ff" method="POST" className='space-y-4'>
            <input type="text" placeholder='Enter Name' className='p-3 w-full rounded-md text-black border-2 border-black' />
            <input type="email" name='email' placeholder='Enter Email' className='p-3 w-full rounded-md text-black border-2 border-black' />
            <input type="tel" name='phone' placeholder='Phone Number' className='p-3 w-full rounded-md text-black border-2 border-black' />
            <input type="text" name='subject' placeholder='Subject' className='p-3 w-full rounded-md text-black border-2 border-black' />
            <textarea name='text' placeholder='How can we help you?' className='p-3 w-full h-40 rounded-md text-black border-2 border-black' />
            <div className='flex justify-center'>
              <button type='submit' className='bg-black w-32 rounded-md text-white font-medium my-6 py-3'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Connect