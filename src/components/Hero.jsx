import React from 'react'
import Typed from 'react-typed'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className='text-white'>

        <div className='max-w-[800 px] mt=[-96 px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <p className='text-white font-bold p-2'> THETA TAU ALPHA </p>
            <h1 className='md: text-7xl sm:text-6xl  font-bold md: py-6'>UTD'S PREMIER ENGINEERING FRATERNITY </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-6xl text-xl font-bold py-4'>A one of its kind fraternity for</p>
                <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2' strings={['professional development.','service.','brotherhood.']} typeSpeed={120} backSpeed={140} loop/>
               
            </div>

            <div className='justify-center'>
                    
                    <button className='bg-[white] w-32 rounded-md text-black font-medium my-6 py-3 mx-auto'>RUSH</button>
                </div>



        </div>
    </div>
  )
}

export default Hero