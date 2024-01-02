import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Brothers from './components/Brothers';
import Home from './components/Home';
import Rush from './components/Rush';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Socials from './components/Socials';
function App(){
  return(

    <BrowserRouter>
    <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/Brothers' element = {<Brothers/>}/>
    <Route path = '/Rush' element = {<Rush/>}/>
    <Route path = '/Sponsors' element = {<Sponsors/>}/>
    <Route path = '/FAQ' element = {<FAQ/>}/>
    <Route path = '/Socials' element = {<Socials/>}/>

    </Routes>
    </BrowserRouter>

  );
}
export default App