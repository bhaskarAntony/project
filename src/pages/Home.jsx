import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Choose from '../components/Choose'
import Cars from '../components/Cars'
import OneDayTrips from '../components/OneDayTrips'
import RSR_Services from '../components/RSR_Services'
import AboutUs from '../components/AboutUs'
import Working from '../components/Working'
import FaqSection from '../components/FaqSection'
import HomeHero from '../components/HomeHero'
import ContactNumber from '../components/ContactNumber'
import Transportation from '../components/Transportation'
import Discover from '../components/Discover'

function Home() {
  return (
    <div>
      <HomeHero/>
      <Working/>
      <Features/>
      <ContactNumber/>
      <RSR_Services/>
      <Transportation/>
      <Discover/>
      <Choose/>
      <Cars/>
      {/* <OneDayTrips/> */}
  
      <AboutUs/>
      <FaqSection/>
    </div>
  )
}

export default Home
