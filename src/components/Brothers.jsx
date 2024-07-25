import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Avatar } from '@mui/material';
import Typed from 'react-typed';
import './CS.css';
import Footer from './Footer';

import Manas1 from '../assets/manas1.png';
import Nihanth from '../assets/nihanth.png';
import Suraj from '../assets/suraj.png';
import Rujvi from '../assets/rujvi.png';
import Ash from '../assets/ash.png';
import Neel from '../assets/neel.png';
import Syam from '../assets/syam.png';
import Adi from '../assets/adi.png';
import Yash from '../assets/yash.JPG';
import Manish from '../assets/manish.png';
import Thejaswin from '../assets/default.png';
import Aryan from '../assets/default.png';
import Sai from '../assets/default.png';
import Mati from '../assets/default.png';
import Sid from '../assets/sid.png';
import Adic from '../assets/adic.png';
import Ozair from '../assets/ozair.png';
import Cody from '../assets/cody.png';
import Nehith from '../assets/default.png';
import Suhas from '../assets/default.png';
import Nandan from '../assets/default.png';

const members = [
  { name: 'Manas Singh', role: 'Regent', major: 'CS and SE', class: 'Class of 2025', image: Manas1 },
  { name: 'Nihanth Attaluri', role: 'Vice-President', major: 'CS', class: 'Class of 2025', image: Nihanth },
  { name: 'Suraj Sidda', role: 'Treasurer', major: 'Undeclared', class: 'Class of 2025', image: Suraj },
  { name: 'Rujvi Doppalapudi', role: 'Secretary', major: 'CS and DS', class: 'Class of 2025', image: Rujvi },
  { name: 'Ashar Alvany', role: 'Director of Recruitment', major: 'CS', class: 'Class of 2025', image: Ash },
  { name: 'Neel Neupane', role: 'Director of Internal Affairs', major: 'CS', class: 'Class of 2026', image: Neel },
  { name: 'Syam Konala', role: 'Director of Logistics', major: 'BMEN', class: 'Class of 2026', image: Syam },
  { name: 'Adi Devas', role: 'Director of Marketing', major: 'CS and DS', class: 'Class of 2025', image: Adi },
  { name: 'Yash Narsian', role: 'Director of Project Management', major: 'BMEN', class: 'Class of 2025', image: Yash },
  { name: 'Manish Mallik', role: 'Director of Industry Coordination', major: 'CS', class: 'Class of 2025', image: Manish },
  { name: 'Thejaswin Kumaran', role: 'External Affairs Head', major: 'CS', class: 'Class of 2026', image: Thejaswin },
  { name: 'Aryan Punjabi', role: 'Chairman of Fundraising', major: 'CS', class: 'Class of 2026', image: Aryan },
  { name: 'Sai Haneesh Tummalapalli', role: 'Chairman Of CS', major: 'CS', class: 'Class of 2026', image: Sai },
  { name: 'Mati Rajesh', role: 'Inactive Member', major: 'CE', class: 'Class of 2026', image: Mati },
  { name: 'Sid Sharma', role: 'Member', major: 'BMEN', class: 'Class of 2026', image: Sid },
  { name: 'Adithya Chintala', role: 'Chairman Of CS', major: 'CS', class: 'Class of 2026', image: Adic },
  { name: 'Ozair Kamran', role: 'Chairman Of Marketing', major: 'CS', class: 'Class of 2026', image: Ozair },
  { name: 'Cody Kerr', role: 'Member', major: 'CS', class: 'Class of 2026', image: Cody },
  { name: 'Nehith Gopireddy', role: 'Member', major: 'CS', class: 'Class of 2026', image: Nehith },
  { name: 'Suhas Shivaraju', role: 'Member', major: 'CS', class: 'Class of 2026', image: Suhas },
  { name: 'Nandan Pabolu', role: 'Member', major: 'CS', class: 'Class of 2026', image: Nandan }
];

const Brothers = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = members.map(member => {
      const img = new Image();
      img.src = member.image;
      return img;
    });

    Promise.all(images.map(img => new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    }))).then(() => setLoaded(true));
  }, []);

  return (
    <div className='text-white'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Brothers']} typeSpeed={50} backSpeed={75} />
      </div>

      {!loaded ? (
        <div className='flex justify-center items-center h-screen'>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>
          {members.map((member, index) => (
            <div key={index} className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>
              <Avatar alt={member.name} src={member.image} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
              <h2 className='text-2xl font-bold text-center text-black px-4'>{member.name}</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>{member.role}</p>
                <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: {member.major}</p>
                <p className='py-2 border-b2 mx-8 text-black text-xl'>{member.class}</p>
                <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Brothers;