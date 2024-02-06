import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
     const instagramPageUrl = 'https://www.instagram.com/ttautd/'
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300'>
      <div className='mx-auto w-[75%]'>
        <h1 className='w-full text-3xl font-bold text-[white]'>ΘTA.</h1>
        <p className='py-3'>© THETA TAU ALPHA ALPHA COLONY ALL RIGHTS RESERVED</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <a href={instagramPageUrl} target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} />
    </a>
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;