import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HeroForDetails from './Components/HeroForDetails'
import RandomHotels from './Components/RandomHotels'

function Hotels() {
  return (
    <div>
      <Navbar/>
      <HeroForDetails/>
      <RandomHotels/>
      <Footer/>
    </div>
  )
}

export default Hotels
