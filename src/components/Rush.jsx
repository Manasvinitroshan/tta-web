import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Typed from 'react-typed'

const Rush = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <div className='flex justify-center items-center'>

        <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Rush']} typeSpeed={50} backSpeed={75} />

      </div>
      <Footer />
    </div>
  )
}

export default Rush