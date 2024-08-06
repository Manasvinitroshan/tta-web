import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typed from 'react-typed';
import oracleLogo from '../assets/oracle-logo-large-white-1.png';
import statefarm from '../assets/State-Farm-Logo.webp';
import fujitsu from '../assets/Fujitsu-emblem.jpg'
import goldman from '../assets/goldman-sachs-new-2022-white-logo-39E22A40E2-seeklogo.com.png'
import JPMC from '../assets/JPMC.jpg'
import Infosys from '../assets/infosys-logo-infosys-icon-free-free-vector.jpg'
import IBM from '../assets/ibm-logo-white.png'
import LM from '../assets/white_lockheed_martin_logo_by_juanking334_dgf03rb-fullview.png' 


const Newsletter = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full py-16 text-white bg-black-900'>
        
        <div className='flex justify-center items-center'>
        <Typed
          className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center'
          strings={['Where our mentors work']}
          typeSpeed={50}
          backSpeed={75}
        />
      </div>

      <div className='mt-12'>
      <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>
        <img src={oracleLogo}/>
        <img src={statefarm}/>
        <img src={fujitsu}/>
        <img src={goldman}/>
        <img src={JPMC}/>
        <img src={Infosys}/>
        <img src={IBM}/>
        <img src={LM}/>
        </div>

      </div>
        
    
    </div>
  )
}

export default Newsletter