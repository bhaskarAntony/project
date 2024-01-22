import React from 'react'
import './styles/hero.css'
import BookForm from './BookForm'
import { Helmet } from 'react-helmet'

function Hero() {

  return (
    
    <section className='employee-hero container-fluid p-lg-5 p-3'>
       <Helmet>
        <title>Premium Employee Transportation Services in Bangalore | RSR Tours</title>
        <meta name="description" content="Enhance your company's employee commute with RSR Tours - your trusted partner for reliable and efficient employee transportation services in Bangalore. Discover hassle-free rides, timely pickups, and a commitment to safety." />
        {/* Other SEO-related meta tags */}
      </Helmet>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
            <div className="employee-hero-text">
                <h1 className="heading text-bold text-white mt-3">
                Elevate Your Workforce Commute with RSR Tours in Bangalore
                </h1>
                <p className="mt-3 fs-5 text-white">
                Welcome to <span className="text-main"> RSR Tours</span>, your premier choice for top-notch employee transportation services in the vibrant city of Bangalore. At RSR Tours, we understand the significance of seamless and comfortable transportation for your employees, contributing to their well-being and productivity.
                </p>
                <div className="btns d-flex gap-4 mt-4 mb-3">
                    <button className="main-btn hero-tn">Learn More</button>
                    <button className="hero-bn btn-outline-light">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
            <BookForm/>
        </div>
      </div>
    </section>
  )
}

export default Hero
