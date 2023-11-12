import React from 'react'
import './style.css'
import AboutUs from '../../components/AboutUs'
import Choose from '../../components/Choose'
import RSR_Services from '../../components/RSR_Services'
import Working from '../../components/Working'

function About() {
  return (
    <section className='about-page'>
      <div className="banner bg-banner">
            <h1 className="heading text-white text-center">About Us</h1>
      </div>
      <Working/>
      <AboutUs/>
      <RSR_Services/>
      <Choose/>
     

    </section>
  )
}

export default About
