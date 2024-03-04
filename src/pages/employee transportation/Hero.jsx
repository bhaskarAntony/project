import React from 'react'
import './styles/hero.css'
import BookForm from './BookForm'
import { Helmet } from 'react-helmet'

function Hero() {

  return (
    
    <section className='employee-hero container-fluid p-lg-5 p-3'>
       <Helmet>
        <title>Employee Transportation Services in Bangalore | Reliable Solutions -  RSR Tours and Travels</title>
        <meta name="description" content="Discover reliable employee transportation solutions in Bangalore with RSR Tours and Travels. Our services ensure seamless commutes for your employees, enhancing productivity and satisfaction. Contact us for efficient and hassle-free employee transport services." />
        {/* Other SEO-related meta tags */}
      </Helmet>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
            <div className="employee-hero-text">
                <h1 className="heading text-bold text-white mt-3">
                Efficient Employee Transportation Services in Bangalore
                </h1>
                <h2 className='fs-4 text-white'>Corporate Transport Solutions Bangalore</h2>
                <h2 className='fs-6 text-main'>Reliable Employee Transportation Bangalore</h2>
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
