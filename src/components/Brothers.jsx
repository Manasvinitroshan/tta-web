import React from 'react'
import Navbar from './Navbar'
import { useNavigate, useHistory } from 'react-router-dom';
import Cards from './Cards';
import Typed from 'react-typed'
import Manas from '../assets/default.png'
import Manas1 from '../assets/manas1.png'
import Syam from '../assets/syam.png'
import Yash from '../assets/yash.JPG'
import Nihanth from '../assets/nihanth.png';
import Suraj from '../assets/suraj.png'
import Neel from '../assets/neel.png'
import Rujvi from '../assets/rujvi.png'
import Ash from '../assets/ash.png'
import Adi from '../assets/adi.png'
import Manish from '../assets/manish.png'
import Cody from '../assets/cody.png'
import Ozair from '../assets/ozair.png'
import Sid from '../assets/sid.png'
import Alekhyaa from '../assets/alekhyaa.png'
import Adic from '../assets/../assets/adic.png'
import Aryamon from '../assets/aryamon.png'
import Snehal from '../assets/snehal.png'
import Avatar from '@mui/material/Avatar';
import './CS.css';
import Footer from './Footer'


const Brothers = () => {

    return (
        <div className='text-white'>
            <Navbar />
            <div className='flex justify-center items-center'>

                <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Executive Board']} typeSpeed={50} backSpeed={75} />

            </div>

            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas1} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Manas Singh</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>President</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and SE</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Nihanth" src={Nihanth} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Nihanth Attaluri</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Vice-President</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Suraj" src={Suraj} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Suraj Sidda</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Treasurer</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: Undeclared</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>


            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Rujvi" src={Rujvi} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Rujvi Doppalapudi
                    </h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Secretary</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and DS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Ash" src={Ash} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Ashar Alvany</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Recruitment</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Neel" src={Neel} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Neel Neupane</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Internal Affairs</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>








            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Syam" src={Syam} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Syam Konala
                    </h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Logistics</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: BMEN</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Adi" src={Adi} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Adi Devas</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Marketing</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and DS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Yash" src={Yash} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black px-4'>Yash Narsian</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Project Managment</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: BMEN</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

<Avatar alt="Manish" src={Manish} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
<h2 className='text-2xl font-bold text-center  text-black px-4'>Manish Mallik</h2>
<div className='text-center font-medium'>

    <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Director of Industry Coordination</p>
    <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
    <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
    <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
</div>

</div>

<div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Thejaswin Kumaran</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>VP of External Affairs</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>

            </div>


            <div className='flex justify-center items-center mt-[5rem]'>

                <Typed className='md:text-5xl sm:text-6xl text-xl font-bold pl-2 text-center' strings={['Active Members']} typeSpeed={50} backSpeed={75} />

            </div>

            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Aryan Punjabi</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman of Fundraising</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Sai Haneesh Tummalapalli</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Mati Rajesh</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Inactive Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CE</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>









            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Sid} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Sid Sharma</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: BMEN</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Adic} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Adithya Chintala</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Ozair} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Ozair Kamran</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of Marketing</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>





            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Cody} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Cody Kerr</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Nehith Gopireddy</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Suhas Shivaraju</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>








            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Nandan Pabolu</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Peyton Barre</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Sitara Hariharan</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and DS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>






            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Luigi Victorelli
                    </h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>


                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Sathvik Kasireddy
                    </h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of Industry Coordination</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CIS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

<Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
<h2 className='text-2xl font-bold text-center  text-black'>Rahul Karthik
</h2>
<div className='text-center font-medium'>

    <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
    <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
    <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
    <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
</div>

</div>



            </div>







            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Sathvik Kasireddy
                    </h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of Industry Coordination</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CIS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Rithvik Thota</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman of Industry Coordination</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Manas} sx={{ width: 150, height: 150 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Navya Vadlamudi</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and DS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>




            <div className='max-w-[1240px] mx-auto mt-12 grid md:grid-cols-3 gap-20'>

                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Snehal} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Snehal Mazumder</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of BMEN</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: BMEN</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2026</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>









                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white '>

                    <Avatar alt="Manas" src={Alekhyaa} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Alekhyaa Donthireddy</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Chairman Of Marketing</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>








                <div className='w-full shadow-xl flex flex-col p-4 mt-10 rounded-lg hover:scale-105 duration-300 bg-white'>

                    <Avatar alt="Manas" src={Aryamon} sx={{ width: 250, height: 250 }} className='mx-auto mt-[3rem]' />
                    <h2 className='text-2xl font-bold text-center  text-black'>Aryaman Dashora</h2>
                    <div className='text-center font-medium'>

                        <p className='py-2 border-b2 mx-8 mt-8 text-black text-xl'>Member</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Major: CS and DS</p>
                        <p className='py-2 border-b2 mx-8 text-black text-xl'>Class of 2025</p>
                        <p className='py-2 mx-8 text-black text-xl'>Alpha Class</p>
                    </div>

                </div>



            </div>










                <Footer/>


        </div>
    )
}

export default Brothers