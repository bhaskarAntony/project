import React from 'react'
import './styles/hero.css'
import Airport from '../../components/RegistrationForm/Airport'

function Hero() {
  return (
    <section className='airport-hero container-fluid p-lg-5 p-3'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
            <div className="employee-hero-text">
                <h1 className="heading text-bold text-white mt-3">
                Streamlining  Airport Transfers for Convenience and Efficiency
                </h1>
                <p className="mt-3 fs-5 text-white">
                  Enjoy Hassle-Free Airport Journeys with <span className="text-bold text-main">RSR Airport Taxi Services</span>. Our dependable services guarantee a stress-free and punctual travel experience to and from the airport, every time.
              </p>


                <div className="btns d-flex gap-4 mt-4 mb-3">
                    <button className="main-btn hero-tn">Learn More</button>
                    <button className="hero-bn btn-outline-light">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
           <div className="bg-white p-4 py-4">
           <Airport/>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
