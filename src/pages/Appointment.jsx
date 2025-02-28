import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const Appointment = () => {
  let { docId } = useParams()
  let { doctors } = useContext(AppContext)
  let filteredDoc = doctors.filter((doctor) => {
    return doctor._id == docId
  })
  console.log(filteredDoc)
  return (
    <div className='relative top-24 z-0 p-3 pt-5 flex gap-10 mb-40'>
      {
        filteredDoc.map((doctor) => {
          return <div className='flex gap-5 h-90' key={doctor._id}>
            <img className='bg-[var(--bg-color)] rounded-sm' src={doctor.image} alt="" />
            <div className='border-2 border-gray-300 rounded-md p-5 flex flex-col gap-2 justify-center'>
              <p className='text-3xl font-semibold flex items-center gap-2'>{doctor.name}<img src={assets.verified_icon} alt="" /></p>
              <p className='flex gap-3 items-center'><span className='capitalize'>{doctor.degree}-{doctor.speciality}</span><span className='border-2 border-gray-400 px-3 py-0.5 rounded-full'>{doctor.experience}</span></p>
              <p className=' text-lg flex gap-2'>About <img src={assets.info_icon} alt="" /></p>
              <p className='text-gray-600'>{doctor.about}</p>
              <p className=' text-lg'>Address</p>
              <p className='text-gray-600'>{doctor.address.line1},{doctor.address.line2}</p>
              <p className='text-gray-600'>Appointment fee: <span className='font-bold'>${doctor.fees}</span></p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Appointment
