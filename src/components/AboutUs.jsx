import React from 'react'
import '../styles/about.css'
import { Link } from 'react-router-dom'
function AboutUs() {
  return (
    <section className='about-section container-fluid bg-black p-lg-5 p-3'>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-6">
            <img src="https://img.freepik.com/free-photo/front-view-women-dealership_23-2148266076.jpg?w=740&t=st=1699529808~exp=1699530408~hmac=818da744c2e6c1849f084975eefdd7a9364a345de72f234c69bb96b4eac39b46" alt="" className="w-100 mb-4" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="about-text">
                <p className="fs-2 text-900 text-main text-decoration-underline">About Us</p>
                <h1 className="fs-1 text-white text-900">THE BEST CAR RENTAL <br /> SERVICE IN <span className="text-main">
                BANGALORE</span></h1>
                <p className='fs-5 mt-4 text-white py-4'>Car rental taxi service- <span className="text-main fw-bold">RSR Tours and Travels. </span>We Providing best Outstation Cab Services, Hourly car rental, Airport taxi, Employee Transportation and Luxury car Rental service in and around bangalore city.
                    <span className="text-main fw-bold">Contact us 24/7 to Facilitate Bookings or tours and travels or any queries and concerns. </span></p>
                    <Link to='/' className='main-btn text-decoration-none'>Learn More</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
