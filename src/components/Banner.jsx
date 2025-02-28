import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const navigate=useNavigate()
  return (
    <div className='flex justify-evenly bg-[var(--bg-color)] px-6 pt-20 my-40 rounded-sm'>
      <div className='py-24'>
        <div className='text-5xl font-semibold text-white'>
          <p>Book Appointment</p>
          <p className='mt-4'>with 100+ trusted doctor</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm px-8 py-3 text-gray-600 rounded-full mt-6 cursor-pointer hover:scale-105 transition-all'>Create Account</button>
      </div>
      <div className='relative w-[370px]'>
        <img className='absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
