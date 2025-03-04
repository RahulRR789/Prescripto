import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/relatedDoctors'

const Appointment = () => {
  let [docInfo, setDocInfo] = useState(null)
  let [docSlots, setDocSlots] = useState([])
  let [slotIndex, setSlotIndex] = useState(0)
  let [slotTime, setSlotTime] = useState("")
  let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  let { docId } = useParams()
  let { doctors } = useContext(AppContext)

  let filterDoctor = async () => {
    let filterDoc = doctors.find((doctor) => {
      return doctor._id == docId
    })
    setDocInfo(filterDoc)
  }
  useEffect(() => {
    filterDoctor()
  }, [doctors, docId])

  let getAvailableSlot = () => {
    setDocSlots([]);
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();

    // Check if the current time is beyond 8:30 PM
    let isPastLastSlot = currentHour > 20 || (currentHour === 20 && currentMinute > 30);

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + (isPastLastSlot ? i + 1 : i)); // Skip today if past 8:30 PM

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0 && !isPastLastSlot) {
        // Adjust start time if booking is on the same day and not past 8:30 PM
        currentDate.setHours(currentHour + 1);
        currentDate.setMinutes(currentMinute > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => [...prev, timeSlots]);
    }
  };


  useEffect(() => {
    getAvailableSlot()
  }, [docInfo])

  return (
    <div className='relative top-24 z-0 p-3 pt-5 flex flex-col gap-10 mb-40'>
      {
        docInfo && (
          <div className='flex gap-5 h-90' >
            <img className='bg-[var(--bg-color)] rounded-sm' src={docInfo.image} alt="" />
            <div className='border-2 border-gray-300 rounded-md p-5 flex flex-col gap-2 justify-center'>
              <p className='text-3xl font-semibold flex items-center gap-2'>{docInfo.name}<img src={assets.verified_icon} alt="" /></p>
              <p className='flex gap-3 items-center'><span className='capitalize'>{docInfo.degree}-{docInfo.speciality}</span><span className='border-2 border-gray-400 px-3 py-0.5 rounded-full'>{docInfo.experience}</span></p>
              <p className=' text-lg flex gap-2'>About <img src={assets.info_icon} alt="" /></p>
              <p className='text-gray-600'>{docInfo.about}</p>
              <p className=' text-lg'>Address</p>
              <p className='text-gray-600'>{docInfo.address.line1},{docInfo.address.line2}</p>
              <p className='text-gray-600'>Appointment fee: <span className='font-bold'>${docInfo.fees}</span></p>
            </div>
          </div>
        )
      }
      <div className='flex flex-col bg-amber-0'>
        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-semibold'>Book Slots</p>
          <div className='flex gap-3'>
            {
              docSlots.length && docSlots.map((slot, i) => {
                return <div onClick={() => setSlotIndex(i)} key={i} className={`flex flex-col justify-center items-center border-gray-400 border-2  w-15 h-22 rounded-full cursor-pointer 
              ${slotIndex == i ? "bg-[var(--bg-color)] text-white border-black " : ""}`}>
                  <p className='font-semibold'>{slot[0] && daysOfWeek[slot[0].dateTime.getDay()]}</p>
                  <p className='font-semibold'>{slot[0] && slot[0].dateTime.getDate()}</p>
                </div>
              })
            }
          </div>
          <div className=' time-slot gap-5 flex overflow-x-scroll'>
            {
              docSlots.length && docSlots[slotIndex].map((item, index) => {
                return <p onClick={() => setSlotTime(item.time)} className={`text-nowrap font-light border-gray-400 border-1 px-4 py-2 cursor-pointer rounded-full ${item.time == slotTime ? "bg-[var(--bg-color)] text-white" : ""}`} key={index}>
                  {item.time.toLowerCase()}
                </p>
              })
            }
          </div>
          <button className='bg-[var(--bg-color)] w-fit px-6 py-4 text-lg hover:scale-105 cursor-pointer transition-all text-white rounded-full flex-none'>
            Book an appointment
          </button>

        </div>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo &&( docInfo.speciality)} />
    </div>
  )
}

export default Appointment
