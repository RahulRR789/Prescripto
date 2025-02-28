import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {
  let navigate=useNavigate(0)
  let { doctors } = useContext(AppContext)
  let { speciality } = useParams()
  let [filterDoc, setFilterDoc] = useState([])
  console.log(speciality)
  let doctorFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(e => e.speciality == speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    doctorFilter()
  }, [doctors, speciality])

  return (
    <div className='relative top-24 z-0 p-3 pt-5 flex gap-10 mb-40'>
      <div className='flex flex-col gap-5'>
        <p className='text-gray-900'>Browse through the doctors speciality</p>
        <ul className='flex flex-col gap-3'>
        <li className='border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm' onClick={()=>navigate('/doctors')}>All doctors</li>
          <li className={`border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm ${speciality=='General physician'?"bg-indigo-100":""}`} onClick={()=>navigate('/doctors/General physician')}>General physician</li>
          <li className={`border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm ${speciality=='Gynecologist'?"bg-indigo-100":""}`} onClick={()=>navigate('/doctors/Gynecologist')}>Gynecologist</li>
          <li className={`border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm ${speciality=='Dermatologist'?"bg-indigo-100":""}`} onClick={()=>navigate('/doctors/Dermatologist')}>Dermatologist</li>
          <li className={`border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm ${speciality=='Pediatricians'?"bg-indigo-100":""}`} onClick={()=>navigate('/doctors/Pediatricians')}>Pediatricians</li>
          <li className={`border p-3 border-gray- cursor-pointer hover:bg-indigo-100 text-sm rounded-sm ${speciality=='Neurologist'?"bg-indigo-100":""}`} onClick={()=>navigate('/doctors/Neurologist')}>Neurologist</li>
          
        </ul>
      </div>
      <div className='w-full grid grid-col-auto gap-4 gap-y-6 px-3'>
        {
          filterDoc.map((doctor, index) => {
            return <div onClick={() => { navigate(`/appointment/${doctor._id}`) }} key={index} className='border border-blue-200 rouded-xl overflow-hidden cursor-pointer'>
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
    </div>
  )
}

export default Doctor
