import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Cars from '../components/Cars'
import OneDayTrips from '../components/OneDayTrips'

function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Services/>
      <Choose/>
      <Cars/>
      <OneDayTrips/>
    </div>
  )
}

export default Home
