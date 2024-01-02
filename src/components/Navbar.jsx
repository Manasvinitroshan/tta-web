import React, {useState} from 'react'
import '/Users/manassingh/Desktop/tta-web/src/index.css'; // Import your styles
import {AiOutlineAim, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useNavigate} from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate()
  const [nav,setNav]= useState(false)
  const handleNav = () => {

    setNav(!nav)

  }




  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240 px] mx-auto px-3'>
        <h1 className='w-full font-bold text-4xl ' type="submit" onClick={() => navigate('/')}>
        ΘTA.
        </h1>
        <ul className='hidden md:flex'>

          <li className='p-4' type="submit" onClick={() => navigate('/Brothers')}>Brothers</li>
          <li className='p-4' type="submit" onClick={() => navigate('/Rush')}>Rush</li>
          <li className='p-4'type="submit" onClick={() => navigate('/Sponsors')}>Projects</li>
          <li className='p-4'type="submit" onClick={() => navigate('/FAQ')}>FAQs</li>
          <li className='p-4'type="submit" onClick={() => navigate('/Socials')}>Connect</li>
         

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r bg-black border-r-gray-900 m-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='pt-24 uppercase'>
        <li className='p-4 border-b border-gray-600'>Brothers</li>
          <li className='p-4 border-b border-gray-600'>Rush</li>
          <li className='p-4 border-b border-gray-600'>Sponsors</li>
          <li className='p-4 border-b border-gray-600'>FAQ's</li>
          <li className='p-4 border-b border-gray-600'>Socials</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar