import React from 'react'
import './styles/hero.css'
import Airport from '../../components/RegistrationForm/Airport'
import { Helmet } from 'react-helmet'

function Hero() {
  return (
    <section className='airport-hero container-fluid p-lg-5 p-3'>
       <Helmet>
        <title>RSR Tours and Travels: Airport Taxi Services in Bangalore | Reliable Transfers</title>
        <meta name="description" content="RSR Tours and Travels offers reliable airport taxi services in Bangalore. Enjoy hassle-free transfers with our professional drivers and comfortable vehicles. Book now for convenient airport transportation." />
        {/* Other SEO-related meta tags */}
      </Helmet>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
            <div className="employee-hero-text">
                <h1 className="heading text-bold text-white mt-3">
                Airport Taxi Services in Bangalore by RSR Tours and Travels
                </h1>
                <h2 className='fs-4 text-white'>Bangalore Airport Taxi</h2>
                <h2 className="mt-3 fs-5 text-white">
                  Enjoy Hassle-Free Airport Journeys with <span className="text-bold text-main">RSR Airport Taxi Services</span>. Our dependable services guarantee a stress-free and punctual travel experience to and from the airport, every time. Bangalore Airport Pickup Service, Airport Transfers Bangalore, Bangalore Airport Shuttle, RSR Tours Airport Taxi
                      Bangalore Airport Cab Services
                      Reliable Airport Transportation Bangalore
                      RSR Tours Airport Transfers
                      Airport Taxi Booking Bangalore        
                      Bangalore Airport Pickup Service
                      RSR Tours Airport Shuttle
              </h2>


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
