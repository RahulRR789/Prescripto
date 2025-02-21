import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
const Navbar = () => {
    let navigate = useNavigate()
    let [active, setActive] = useState("home")
    let [menu, setMenu] = useState(false)
    let [token, setToken] = useState(true)
    return (
        <div className='fixed pt-2 px-2 h-24  bg-white z-10 w-full'>
            <nav className=" top-2 inset-x-4 bg-white rounded-md py-5 px-7 flex justify-between items-center shadow-[0px_0px_5px_rgba(0,0,0,0.5)]">

                <NavLink to="/"><img src={assets.logo} alt="" className='w-44' /></NavLink>
                <ul className='flex gap-5'>
                    <NavLink to={"/"} className='flex flex-col justify-center items-center' onClick={() => { setActive("home") }}>
                        <li className='text-2xl font-medium text-[var(--primary-color)]'>Home</li>
                        {
                            active == "home" ?
                                <hr className='h-0.5 rounded-full w-[90%] bg-[var(--primary-color)] border-none' /> : ""
                        }
                    </NavLink>
                    <NavLink to={"/doctors"} className='flex flex-col justify-center items-center' onClick={() => { setActive("doctor") }}>
                        <li className='text-2xl font-medium text-[var(--primary-color)]'>Doctors</li>
                        {
                            active == "doctor" ?
                                <hr className='h-0.5 rounded-full w-[90%] bg-[var(--primary-color)] border-none' /> : ""
                        }
                    </NavLink>
                    <NavLink to={"/about"} className='flex flex-col justify-center items-center' onClick={() => { setActive("about") }}>
                        <li className='text-2xl font-medium text-[var(--primary-color)]'>About</li>
                        {
                            active == "about" ?
                                <hr className='h-0.5 rounded-full w-[90%] bg-[var(--primary-color)] border-none' /> : ""
                        }
                    </NavLink>
                    <NavLink to={"/contact"} className='flex flex-col justify-center items-center' onClick={() => { setActive("contact") }}>
                        <li className='text-2xl font-medium text-[var(--primary-color)]'>Contact</li>
                        {
                            active == "contact" ?
                                <hr className='h-0.5 rounded-full w-[90%] bg-[var(--primary-color)] border-none' /> : ""
                        }
                    </NavLink>
                </ul>
                <ul>
                    {
                        token
                            ? <div className='flex justify-center items-center gap-2 cursor-pointer group relative'>
                                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                                <div className='absolute top-2 right-[-30px] pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='bg-stone-100 rounded min-w-48 p-4 flex flex-col gap-4'>
                                        <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                                        <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-appointment')}>My Appointment</p>
                                        <p className='hover:text-black cursor-pointer' onClick={()=>setToken(false)}>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='flex cursor-pointer justify-center items-center text-lg font-medium border-2 py-2 px-5 rounded-4xl bg-[#5F6EFF]  text-white' >Create account</button>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
