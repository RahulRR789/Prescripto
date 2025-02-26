import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-5 bg-[var(--bg-color)] rounded h-[75vh]'>
            <div className='flex flex-col gap-5'>
                <p className=' text-4xl font-bold text-white'>Book Appointmet <br />
                    With Trusted Doctors</p>
                <div className='flex gap-3'>
                    <img src={assets.group_profiles} alt="" />
                    <p className='text-white'>Simply browse through our exclisive list of trusted doctors <br />
                        schedule your appointment hassle-free</p>
                </div>
                <a href="#speciality" className='flex bg-white w-50 py-3 rounded-full px-5 gap-3'>Book appintmonet <img src={assets.arrow_icon} alt="" /></a>
            </div>
            <div className='h-full flex items-end'>
            <img className='h-96' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
