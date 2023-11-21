import React from 'react'
import Coding from '../assets/coding.png'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

            <img className='w-100 mx-auto my-4'src={Coding} alt=''></img>

            <div className='flex flex-col justify-center '>
                <p className='text-[black] font-bold text-xl'>ABOUT US</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>A FRATERNITY FOR ALL ENGINEERS</h1>
                <p className='py-4'>
                Theta Tau Alpha aims to develop and maintain a high standard of professional interest among its members, uniting them in a strong bond of fraternal fellowship. Dedicated to engineering leaders for service, profession, and brotherhood, we provide an affordable professional Greek life experience that offers career-building and networking opportunities.
                </p>

                <button className='bg-[black] w-32 rounded-md text-white font-medium my-6 py-3 mx-auto md:mx-0'>Brotherhood</button>
            </div>

           

        </div>
    </div>
  )
}

export default About