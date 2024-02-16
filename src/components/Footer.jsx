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
     const gitHub = 'https://github.com/ThetaTauUTD'
     const Twitter = 'https://twitter.com/ThetaTauAlpha'
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300'>
      <div className='mx-auto w-[75%]'>
        <h1 className='w-full text-3xl font-bold text-[white]'>ΘTA.</h1>
        <p className='py-3'>© THETA TAU ALPHA ALPHA COLONY ALL RIGHTS RESERVED</p>
        <div className='flex justify-between md:w-[75%] my-6'>
           
            <a href={instagramPageUrl} target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} />
    </a>
    <a href={Twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} />
            </a>
          
            <a href={gitHub} target="_blank" rel="noopener noreferrer">
      <FaGithubSquare size={30} />
    </a>
            
        </div>
      </div>
      
    </div>
  );
};

export default Footer;