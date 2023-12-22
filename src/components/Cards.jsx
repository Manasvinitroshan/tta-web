import React from 'react'
import Brother from '../assets/brother.png'
import Service from '../assets/service.png'
import PD from '../assets/PD.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Brother} alt='' ></img>
                <h2 className='text-2xl font-bold text-center py-8 '>Brotherhood</h2>
                <p className='text-center py-3 font-medium '>
Theta Tau Alpha fosters a lasting brotherhood through mentorship programs, engaging social events, and a thriving alumni network, extending support and camaraderie far beyond college years.</p>
            </div>


            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Service} alt='' ></img>
                <h2 className='text-2xl font-bold text-center py-8'>Service</h2>
                <p className='text-center py-3 font-medium'>
                Theta Tau Alpha is committed to serving its communities through active engagement in engineering projects, support for philanthropic organizations, and encouragement of volunteerism.</p>
            </div>






            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={PD} alt='' ></img>
                <h2 className='text-2xl font-bold text-center py-8'>Professional Development</h2>
                <p className='text-center py-3 font-medium'>
                Theta Tau Alpha is dedicated to preparing its members for successful engineering careers through a comprehensive professional development program that encompasses networking opportunities, leadership training, and technical advancement initiatives.</p>
            </div>

        </div>



        
        
        </div>




  )
}

export default Cards