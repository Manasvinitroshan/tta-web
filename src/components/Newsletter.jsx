import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        
        <div className='max-w-[1240 px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>See whats up and coming about ΘTA</h1>
                <p>Sign up to our newsletter to get consistent updates!</p>
            </div>

            <div className='my-4'>

            </div>
                <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black'></input>
                <button className='bg-[white] w-32 rounded-md text-black font-medium my-6 py-3 mx-auto ml-4'>RUSH</button>
                
            <div>

            </div>
        </div>
    
    </div>
  )
}

export default Newsletter