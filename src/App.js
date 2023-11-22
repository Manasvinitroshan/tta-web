import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Brothers from './components/Brothers';
import Home from './components/Home';

function App(){
  return(

    <BrowserRouter>
    <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/Brothers' element = {<Brothers/>}/>

    </Routes>
    </BrowserRouter>

  );
}
export default App