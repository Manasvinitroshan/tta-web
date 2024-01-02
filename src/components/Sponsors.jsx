import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'
import Navbar from './Navbar'
import PD from '../assets/PD.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,

} from 'react-icons/fa';
import { SiDevpost } from "react-icons/si";
import { IoMdLink } from "react-icons/io";
import './CS.css';
const Sponsors = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <div className='flex justify-center items-center'>

        <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Projects']} typeSpeed={50} backSpeed={75} />

      </div>

      <div >
        <div className='md:w-[1000px] sm:w-[50%] shadow-xl  py-auto mt-12 mx-auto rounded-lg  bg-white justify-center items-center hover:scale-105 duration-300'>

          <div>
            <h2 className='text-black p-4 text-3xl font-bold text-center'>Student Organization Match Card</h2>
          </div>

          <div className='p-5 mb-2 justify-center items-center'>
            <ul className=' text-black'>
              <li className='custom-list-item'>Caters to UTD student body's club and organizations interest</li>
              <li className='custom-list-item'>GPT-3.5 Turbo API to match several categories to said clubs and orgs</li>
              <li className='custom-list-item'>Helped 31K UTD students connect with 300+ clubs on campus</li>
            </ul>

            <div className='flex justify-between md:w-[100%] my-6'>

              <FaGithubSquare size={100} className='black22' />
              <SiDevpost size={100} className='black22' />
              <IoMdLink size={100} className='black22' />
            </div>
          </div>
        </div>


        <div className='md:w-[1000px] sm:w-[50%] shadow-xl  py-auto mt-12 mx-auto rounded-lg  bg-white justify-center items-center hover:scale-105 duration-300'>

<div>
  <h2 className='text-black p-4 text-3xl font-bold text-center'>Student Organization Match Card</h2>
</div>

<div className='p-5 mb-2 justify-center items-center'>
  <ul className=' text-black'>
    <li className='custom-list-item'>Caters to UTD student body's club and organizations interest</li>
    <li className='custom-list-item'>GPT-3.5 Turbo API to match several categories to said clubs and orgs</li>
    <li className='custom-list-item'>Helped 31K UTD students connect with 300+ clubs on campus</li>
  </ul>

  <div className='flex justify-between md:w-[100%] my-6'>

    <FaGithubSquare size={100} className='black22' />
    <SiDevpost size={100} className='black22' />
    <IoMdLink size={100} className='black22' />
  </div>
</div>
</div>






<div className='md:w-[1000px] sm:w-[50%] shadow-xl  py-auto mt-12 mx-auto rounded-lg  bg-white justify-center items-center hover:scale-105 duration-300'>

<div>
  <h2 className='text-black p-4 text-3xl font-bold text-center'>Student Organization Match Card</h2>
</div>

<div className='p-5 mb-2 justify-center items-center'>
  <ul className=' text-black'>
    <li className='custom-list-item'>Caters to UTD student body's club and organizations interest</li>
    <li className='custom-list-item'>GPT-3.5 Turbo API to match several categories to said clubs and orgs</li>
    <li className='custom-list-item'>Helped 31K UTD students connect with 300+ clubs on campus</li>
  </ul>

  <div className='flex justify-between md:w-[100%] my-6'>

    <FaGithubSquare size={100} className='black22' />
    <SiDevpost size={100} className='black22' />
    <IoMdLink size={100} className='black22' />
  </div>
</div>
</div>




<div className='md:w-[1000px] sm:w-[50%] shadow-xl  py-auto mt-12 mx-auto rounded-lg  bg-white justify-center items-center hover:scale-105 duration-300'>

<div>
  <h2 className='text-black p-4 text-3xl font-bold text-center'>Student Organization Match Card</h2>
</div>

<div className='p-5 mb-2 justify-center items-center'>
  <ul className=' text-black'>
    <li className='custom-list-item'>Caters to UTD student body's club and organizations interest</li>
    <li className='custom-list-item'>GPT-3.5 Turbo API to match several categories to said clubs and orgs</li>
    <li className='custom-list-item'>Helped 31K UTD students connect with 300+ clubs on campus</li>
  </ul>

  <div className='flex justify-between md:w-[100%] my-6'>

    <FaGithubSquare size={100} className='black22' />
    <SiDevpost size={100} className='black22' />
    <IoMdLink size={100} className='black22' />
  </div>
</div>
</div>




<div className='md:w-[1000px] sm:w-[50%] shadow-xl  py-auto mt-12 mx-auto rounded-lg  bg-white justify-center items-center hover:scale-105 duration-300'>

<div>
  <h2 className='text-black p-4 text-3xl font-bold text-center'>Student Organization Match Card</h2>
</div>

<div className='p-5 mb-2 justify-center items-center'>
  <ul className=' text-black'>
    <li className='custom-list-item'>Caters to UTD student body's club and organizations interest</li>
    <li className='custom-list-item'>GPT-3.5 Turbo API to match several categories to said clubs and orgs</li>
    <li className='custom-list-item'>Helped 31K UTD students connect with 300+ clubs on campus</li>
  </ul>

  <div className='flex justify-between md:w-[100%] my-6'>

    <FaGithubSquare size={100} className='black22' />
    <SiDevpost size={100} className='black22' />
    <IoMdLink size={100} className='black22' />
  </div>
</div>
</div>
      </div>
      <Footer />
    </div>
  )
}

export default Sponsors