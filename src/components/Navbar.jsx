import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[white]' onClick={() => navigate('/')}>ΘTA</h1>
      <ul className='hidden md:flex'>
        <li className='p-4' onClick={() => navigate('/Brothers')} onMouseOver={() => {}}>Brothers</li>
        <li className='p-4' onClick={() => navigate('/Rush')} onMouseOver={() => {}}>Rush</li>
        <li className='p-4' onClick={() => navigate('/Sponsors')} onMouseOver={() => {}}>Projects</li>
        <li className='p-4' onClick={() => navigate('/FAQ')} onMouseOver={() => {}}>FAQs</li>
        <li className='p-4' onClick={() => navigate('/Socials')} onMouseOver={() => {}}>Connect</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={
  nav ? 
  'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] bg-opacity-100 ease-in-out duration-500 z-50' : 
  'ease-in-out duration-500 fixed left-[-100%] z-50'
}>
  <h1 className='w-full text-3xl font-bold text-[white] m-4' onClick={() => navigate('/')}>ΘTA</h1>
  <li className='p-4 border-b border-gray-600' onClick={() => navigate('/Brothers')}>Brothers</li>
  <li className='p-4 border-b border-gray-600' onClick={() => navigate('/Rush')}>Rush</li>
  <li className='p-4 border-b border-gray-600' onClick={() => navigate('/Sponsors')}>Projects</li>
  <li className='p-4 border-b border-gray-600' onClick={() => navigate('/FAQ')}>FAQs</li>
  <li className='p-4' onClick={() => navigate('/Socials')}>Connect</li>
</ul>
    </div>
  );
};

export default Navbar;