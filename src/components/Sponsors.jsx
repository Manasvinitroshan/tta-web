import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'
import Navbar from './Navbar'
const Sponsors = () => {
  return (
    <div className='text-white'>
    <Navbar />
    <div className='flex justify-center items-center'>

      <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Sponsors']} typeSpeed={50} backSpeed={75} />

    </div>
    <Footer />
  </div>
  )
}

export default Sponsors