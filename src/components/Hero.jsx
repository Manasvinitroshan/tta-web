import React from 'react'
import Typed from 'react-typed'
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='text-white'>

        <div className='max-w-[1000 px] mt=[-96 px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <p className='text-white font-bold p-2'> THETA TAU ALPHA </p>
            <h1 className='md: text-3xl sm:text-3xl  font-bold md: py-6'>UTD'S PREMIER ENGINEERING FRATERNITY </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-xl sm:text-2xl text-xl font-bold py-4'></p>
                <Typed className='md:text-xl sm:text-2xl text-xl font-bold pl-2' strings={['profession.','service.','brotherhood.']} typeSpeed={60} backSpeed={70} loop/>
               
            </div>

            <div className='justify-center'>
                    
                    <button className='bg-[white] w-32 rounded-md text-black font-medium my-6 py-3 mx-auto' type="submit" onClick={() => navigate('/Rush')}>RUSH</button>
                </div>



        </div>
    </div>
  )
}

export default Hero