import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Brothers from './components/Brothers';

function LandingPage(){
  return(

    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Newsletter/>
      <Cards/>

     
    </div>

  );
}
export default LandingPage