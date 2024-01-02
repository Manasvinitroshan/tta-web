import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'
import Navbar from './Navbar'
import Paper from '@mui/material'



const Socials = () => {


  return (
    <div className='text-white'>
    <Navbar />
    <div className='flex justify-center items-center'>

      <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Connect']} typeSpeed={50} backSpeed={75} />

      

    </div>
   
      <div className='flex justify-center items-center mt-12' >
        <div className='w-[1000px] shadow-xl flex  p-4 my-4 rounded-lg bg-white '>

        
        <div className='flex flex-col'>
        <input type="Name" placeholder='Enter Name' className='p-3 flex w-[400px] rounded-md text-black justify-center border-2 border-black mx-4 mt-4' ></input>
        <input type="Email" placeholder='Enter Email' className='p-3 flex w-[400px] rounded-md text-black justify-center border-2 border-black mt-4 mx-4' ></input>
        <div>
          <textarea type="Text" placeholder='How can we help you?' className='p-3 flex w-[400px] h-[400px] rounded-md text-black justify-center mt-4 border-2 border-black mx-4 mb-4 flex-col ' ></textarea>
          <div className='center'>
        <button className='bg-[black] w-32 rounded-md text-white font-medium my-6 py-3 mx-auto ml-4'>Submit</button>
        </div>
        </div>
        </div>
        <div className='flex-row'>
        <input type="Phone Number" placeholder='Phone Number' className='p-3 flex w-[400px] rounded-md text-black justify-center mt-4 border-2 border-black mx-4 ' ></input>
        <input type="Subject" placeholder='Subject' className='p-3 flex w-[400px] rounded-md text-black justify-center mt-4 border-2 border-black mx-4 mb-4 ' ></input>

        
        </div>
        
        
      
        
        </div>
        
      </div>
      
      <script src='https://smtpjs.com/v3/smtp.js'> </script>
      <script src='script.js'></script>
     
    <Footer />
  </div>
  )
}

export default Socials