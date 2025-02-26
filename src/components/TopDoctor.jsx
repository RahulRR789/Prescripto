import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctor = () => {
    const navigate = useNavigate()
    let {doctors} =useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='text-center text-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, est.</p>
      <div className='w-full grid grid-col-auto gap-4 pt-5 gap-y-6 px-3'>
        {
            doctors.slice(0,12).map((doctor,index)=>{
                return <div onClick={()=>{navigate(`/appointment/${doctor._id}`)}} key={index} className='border border-blue-200 rouded-xl overflow-hidden cursor-pointer'>
                    <img className='bg-blue-50' src={doctor.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-small text-small text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-large font-medium'>{doctor.name}</p>
                        <p className='text-gray-600 text-small'>{doctor.speciality}</p>
                    </div>
                </div>
            })
        }
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-2 rounded-full mt-10 cursor-pointer'>More</button>
    </div>
  )
}

export default TopDoctor
