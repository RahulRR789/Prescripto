import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='relative top-24 p-3'>
      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
      <Banner/>
    </div>
  )
}

export default Home
