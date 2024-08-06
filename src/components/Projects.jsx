import React from 'react';
import Typed from 'react-typed';
import Footer from './Footer';
import Navbar from './Navbar';
import PD from '../assets/PD.png';
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

const Projects = () => {
  const NOTEPALURL = 'http://notepal.ttautd.com/';
  const SunriseClockURL = 'https://www.flipsnack.com/79DF9BAA9F7/sunrise-clock-tta-project/full-view.html';

  return (
    <div className='text-white'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <Typed
          className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center'
          strings={['Projects']}
          typeSpeed={50}
          backSpeed={75}
        />
      </div>

      <div className='flex justify-center items-center text-white md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center py-20'>Coming soon!</div>
      <Footer />
    </div>
  );
}

export default Projects;