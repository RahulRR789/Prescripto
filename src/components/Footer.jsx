import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='p-4 flex flex-col gap-10'>
      <div className=' flex justify-evenly'>
        <div className='w-2/4 flex flex-col gap-5'>
          <img className='w-40' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error cupiditate molestiae amet iure maiores consequatur dignissimos. Ipsam, dolorum neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quis.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-gray-900 text-xl font-semibold uppercase'>Company</h1>
          <ul className='flex flex-col gap-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-gray-900 text-xl font-semibold uppercase'>Get in touch</h1>
          <ul className='flex flex-col gap-2'>
            <li>+91-123 456 789</li>
            <li>Prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='border border-gray-300' />
        <h1 className='text-center mt-2 text-gray-700'>Copyright 2025@ prescripto - All Rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer
