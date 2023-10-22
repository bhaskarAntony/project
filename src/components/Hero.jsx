import React, { useState } from 'react'
import '../styles/hero.css'
import herobg from '../images/car-rental.mp4'
import LocalTaxi from './RegistrationForm/LocalTaxi';
import BookForm from './RegistrationForm/BookForm';

function Hero() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  return (
    <div className='container-fluid hero py-2'>
            <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="hero-left p-lg-3 p-4 px-lg-4">
                    <h1 className="heading text-black text-900" text-900><span className="text-main serif">Explore OutStanding </span>Cabs, Airport Taxi, Luxury cars in Bangalore</h1>
                    <p className='subtitle mt-4 text-lighter'>Car rental taxi service- <span className="text-main fw-bold">RSR Tours and Travels. </span>We Providing best Outstation Cab Services, Hourly car rental, Airport taxi, Employee Transportation and Luxury car Rental service in and around bangalore city.
                    <span className="text-main fw-bold">Contact us 24/7 to Facilitate Bookings or tours and travels or any queries and concerns. </span></p>
                    <div className='mt-4'>
                    <button className="main-btn bg-black hero-btn">View All Cars <i class="bi bi-chevron-double-right"></i></button>
                    <button className="main-btn  mx-lg-3 hero-btn">Why You Choose us?<i class="bi bi-chevron-double-right"></i></button>
                    </div>
                </div>
                </div>
              <div className="col-12 col-md-12 col-lg-6">
              <div className="hero-right p-lg-4 p-2">
                    <img src="https://dreamsrent.dreamguystech.com/html/assets/img/car-right.png" alt="" className='w-100 anim-img' />
                </div>
              </div>
            </div>
            <BookForm/>
        </div>
  )
}

export default Hero
