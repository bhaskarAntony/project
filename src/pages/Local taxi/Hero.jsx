import React from 'react'
import './styles/hero.css'
import BookForm from './BookForm'
import LocalTaxi from '../../components/RegistrationForm/LocalTaxi'

function Hero() {
  return (
    <section className='Local-hero container-fluid p-lg-5 p-3'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
            <div className="employee-hero-text">
                <h1 className="heading text-bold text-white mt-3">
              Revolutionizing Local Taxi Services for Seamless and Efficient Employee Transportation
                </h1>
              <p className="mt-3 fs-5 text-white">
            Exploring Your Local Surroundings with <span className="text-bold text-main">RSR Local Taxi and Hourly Car Rental</span>. Our convenient services guarantee a hassle-free and flexible travel experience tailored to your local needs.
          </p>

                <div className="btns d-flex gap-4 mt-4 mb-3">
                    <button className="main-btn hero-tn">Learn More</button>
                    <button className="hero-bn btn-outline-light">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
           <div className="bg-white p-4 py-4">
           <LocalTaxi/>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
