import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ docId, speciality }) => {
    const navigate = useNavigate()
    let [relatedDoc, setRelatedDoc] = useState([])
    let { doctors } = useContext(AppContext)

    let getRelatedDoc = () => {
        let filterDoc = doctors.filter((doctor) => {
            return doctor.speciality == speciality && doctor._id != docId
        })
        setRelatedDoc(filterDoc)
    }
    useEffect(() => {
        getRelatedDoc()
    }, [docId, speciality])
    return (
        <div className='flex flex-col justify-center w-full items-center'>
            <h1 className='text-3xl text-gray-800 font-semibold'>Related Doctors</h1>
            <div className='w-[50vw] flex justify-center gap-4 pt-5 px-3'>

                {
                    relatedDoc.map((doctor, index) => {
                        return <div onClick={() => { navigate(`/appointment/${doctor._id}`), scrollTo(0,0) }} key={index} className='w-[35%] border border-blue-200 rouded-xl overflow-hidden cursor-pointer'>
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

export default RelatedDoctors
