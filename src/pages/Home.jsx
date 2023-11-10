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

function Home() {
  return (
    <div>
      <HomeHero/>
      <Features/>
      <Working/>
      <RSR_Services/>
      <Choose/>
      <Cars/>
      <OneDayTrips/>
      <AboutUs/>
      <FaqSection/>
    </div>
  )
}

export default Home
