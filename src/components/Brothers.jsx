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
  { name: 'Manas Singh', role: 'Regent', major: 'SE', class: 'Class of 2025',image: Manas1,memberClass: 'Infinity Class' },
  { name: 'Nihanth Attaluri', role: 'Vice-Regent', major: 'CS', class: 'Class of 2025', image: Nihanth,memberClass: 'Infinity Class' },
  { name: 'Aryan Punjabi', role: 'Scribe', major: 'CS', class: 'Class of 2026', image: Aryan,memberClass: 'Infinity Class' },
  { name: 'Rujvi Doppalapudi', role: 'Secretary', major: 'CS and DS', class: 'Class of 2025', image: Rujvi,memberClass: 'Infinity Class' },
  { name: 'Syam Konala', role: 'Director of Marketing', major: 'BMEN', class: 'Class of 2026', image: Syam,memberClass: 'Infinity Class' },
  { name: 'Yash Narsian', role: 'New Member Education Member', major: 'BMEN', class: 'Class of 2025', image: Yash,memberClass: 'Infinity Class' },
  { name: 'Thejaswin Kumaran', role: 'External Affairs Head', major: 'CS', class: 'Class of 2026', image: Thejaswin,memberClass: 'Infinity Class' },
  { name: 'Sai Haneesh Tummalapalli', role: 'Professional Dev Member', major: 'CS', class: 'Class of 2026', image: Sai,memberClass: 'Infinity Class' },
  { name: 'Sid Sharma', role: 'Member', major: 'BMEN', class: 'Class of 2026', image: Sid,memberClass: 'Infinity Class' },
  { name: 'Adithya Chintala', role: 'Project Lead', major: 'CS', class: 'Class of 2026', image: Adic,memberClass: 'Infinity Class' },
  { name: 'Ozair Kamran', role: 'Project Lead', major: 'CS', class: 'Class of 2026', image: Ozair,memberClass: 'Infinity Class'},
  { name: 'Cody Kerr', role: 'Member', major: 'CS', class: 'Class of 2026', image: Cody,memberClass: 'Infinity Class' },
  { name: 'Nehith Gopireddy', role: 'Member', major: 'CS', class: 'Class of 2026', image: Nehith,memberClass: 'Infinity Class' },
  { name: 'Suhas Shivaraju', role: 'Industry Coordination and Finance Member', major: 'CS', class: 'Class of 2026', image: Suhas,memberClass: 'Infinity Class' },
  { name: 'Nandan Pabolu', role: 'Professional Dev Member', major: 'CS', class: 'Class of 2026', image: Nandan,memberClass: 'Infinity Class' },
  { name: 'Adi Devas', role: 'Social Commitee Head', major: 'CS and DS', class: 'Class of 2025', image: Adi,memberClass: 'Infinity Class' },
  { name: 'Ashar Alvany', role: 'Alumni', major: 'CS', class: 'Class of 2025', image: Ash,memberClass: 'Infinity Class' }
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
                <p className='py-2 mx-8 text-black text-xl'>{member.memberClass}</p>
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