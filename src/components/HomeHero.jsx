import React from 'react'
import '../styles/hero.css'
import BookForm from './RegistrationForm/BookForm'
import ApplyNow from '../Helpers/ApplyNow'

function HomeHero() {
  return (
    <div className='home-hero container-fluid p-3'>
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-8">
            <div className="homeHero-text p-lg-5 p-3">
            <h1 className="heading text-white text-900" text-900><span className="text-main serif">Explore OutStanding </span>Cabs, Airport Taxi, Luxury cars in Bangalore</h1>
            <p className='subtitle mt-4 text-white'>Car rental taxi service- <span className="text-main fw-bold">RSR Tours and Travels. </span>We Providing best Outstation Cab Services, Hourly car rental, Airport taxi, Employee Transportation and Luxury car Rental service in and around bangalore city.
                    <span className="text-main fw-bold">Contact us 24/7 to Facilitate Bookings or tours and travels or any queries and concerns. </span></p>
                    <div className="btns ">
                        <ApplyNow text='Check Avaliable Cars'/>
                    </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
                <div className="homeHero-image">

                </div>
            </div>
      </div>
      <BookForm/>
    </div>
  )
}

export default HomeHero
