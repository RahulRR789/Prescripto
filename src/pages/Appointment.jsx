import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Appointment = () => {
  let {docId } = useParams()
  let { doctors } = useContext(AppContext)
  let filteredDoc=doctors.filter((doctor)=>{
    return doctor._id==docId
  })
  return (
    <div>
      {
        filteredDoc.map((doctor)=>{
          return <div>
            <img src={doctor.image} alt="" />
            <h1>{doctor.name}</h1>
            <p>{doctor.degree}</p>
            <p>{doctor.speciality}</p>
            <p>{doctor.about}</p>
            <p>{doctor.address.line1},{doctor.address.line2}</p>
          </div>
        })
      }
    </div>
  )
}

export default Appointment
