import React from 'react'
import { useNavigate } from 'react-router-dom'


const Newsletter = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full py-16 text-white bg-black-900'>
        
        <div className='max-w-[1240 px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 lg:mx-6 ml-auto'>
                

                <h1 className='md:text-xl sm:text-xl text-xl font-bold mx-4'>See what's up and coming about ΘTA</h1>
                <p className='mx-4'>Sign up to our newsletter to get consistent updates!</p>
               
                
            </div>

            <div className='my-4'>

            <div className='flex flex-col sm:flex-row items-center justify-between w-full ml-auto'>

            <input
  type="email"
  placeholder="Enter Email"
  className="p-3 flex w-full rounded-md text-black mx-2 ml-auto"
/>
<button className=' w-32 rounded-md ml-auto font-medium my-6 py-3 mx-auto md:ml-auto text-black bg-white' type="submit" onClick={() => navigate('Brothers')} >Notify Me</button>

</div>

            </div>

            
             
                
            <div>

            </div>
        </div>
    
    </div>
  )
}

export default Newsletter