import React from 'react'
import './style.css'
import AboutUs from '../../components/AboutUs'
import Choose from '../../components/Choose'
import RSR_Services from '../../components/RSR_Services'
import Working from '../../components/Working'
import CarBook from '../../components/CarBook'

function About() {
  return (
    <section className='about-page'>
      <div className="banner bg-banner">
            <h1 className="heading text-white text-center">About Us</h1>
      </div>
     <div className="container-fluid py-5">
     <div className="row">
        <div className="col-12 col-sm-12 col-md-8">
          <div className="about-left p-3">
              <h1 className="fs-1 text-main text-900">About Us</h1>
              <p className="fs-5"><b>RSR TOURS AND TRAVELS</b> is a bangalore-based car rental company associated since <b>2023</b>, we are a full service travel management company. A team of fine entrepreneurs move the company with their dedication, passion, vision and hard work which has resulted in transforming the organization’s operation with a healthy turnover size. The company is headed by core management team comprising of individuals who have extensive experience in travel business who ensure the smooth running of the growing business operations. We have imbibed the group's 'client-first' culture, enabling it to develop and deliver its own unique brand of customer-centric service capabilities across multiple verticals. Our business objective is to make all of our corporate partners, suppliers, and most importantly, our clients a part of RSR TOURS AND TRAVELS family. Serviced more than half a million travellers till date, we always ensure on providing absolute satisfaction to our customers through the support of highly dedicated team members who are ready to provide     <b>24 X 7 support</b>.</p>
              <h1 className="fs-1 mt-5 text-main text-900">Our Mission</h1>
              <p className="fs-5">
              we believe in providing cost effective, comfortable, safe, reliable, eco friendly and secure transport services to meet the needs of our customers and those of their associates at RIGHT pricing
              </p>
              <h1 className="fs-1 mt-5 text-main text-900">Our Vission</h1>
              <p className="fs-5">
              our vision is to offer the best possible services to our customers by adopting business methodologies while ensuring a high-quality, safety drive and to give the best value for customer’s satisfaction by making any improvements as recommended by the customers in future
              </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="about-right">
          <CarBook/>
          </div>
          </div>
      </div>
     </div>
      <Working/>
      <AboutUs/>
      <RSR_Services/>
      <Choose/>
     

    </section>
  )
}

export default About
