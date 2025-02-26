import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='w-full flex flex-col gap-3 justify-center items-center py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>simply browse throught our extensive list of trusted docotrs,schedule your appointment hassle-free</p>
      <div className='flex gap-5 p-5'>
        {
            specialityData.map((item,index)=>{
                return <Link onClick={()=>scrollTo(0,0)} className='flex flex-col justify-center items-center cursor-pointer' key={index} to={`doctor/${item.speciality}`}>
                    <img className='w-20' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            })
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
