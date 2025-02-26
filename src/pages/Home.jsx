import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctor from '../components/TopDoctor'

const Home = () => {
  return (
    <div className='relative top-24 p-3'>
      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
    </div>
  )
}

export default Home
