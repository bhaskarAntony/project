import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Choose from '../components/Choose'
import Cars from '../components/Cars'
import OneDayTrips from '../components/OneDayTrips'
import RSR_Services from '../components/RSR_Services'
import AboutUs from '../components/AboutUs'
import Working from '../components/Working'

function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Working/>
      <RSR_Services/>
      <Choose/>
      <Cars/>
      <OneDayTrips/>
      <AboutUs/>
    </div>
  )
}

export default Home
