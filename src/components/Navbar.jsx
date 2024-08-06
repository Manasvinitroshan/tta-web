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
      {/* Logo with cursor-pointer class */}
      <h1
        className='w-full text-3xl font-bold text-white cursor-pointer'
        onClick={() => navigate('/')}
      >
        ΘTA
      </h1>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {['Brothers', 'Rush', 'Projects', 'FAQs', 'Connect'].map((item, index) => (
          <li
            key={index}
            className='p-4 cursor-pointer hover:text-gray-400'
            onClick={() => navigate(`/${item}`)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] bg-opacity-100 ease-in-out duration-500 z-50'
            : 'fixed left-[-100%] ease-in-out duration-500 z-50'
        }
      >
        <h1
          className='w-full text-3xl font-bold text-white m-4 cursor-pointer'
          onClick={() => navigate('/')}
        >
          ΘTA
        </h1>
        {['Brothers', 'Rush', 'Projects', 'FAQs', 'Connect'].map((item, index) => (
          <li
            key={index}
            className='p-4 border-b border-gray-600 cursor-pointer hover:text-gray-400'
            onClick={() => navigate(`/${item}`)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;