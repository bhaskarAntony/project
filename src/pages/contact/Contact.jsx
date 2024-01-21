import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <section className='contact bg-blur '>
        <div className="banner bg-banner">
            <h1 className="heading text-white text-center">Contact Us</h1>
        </div>
      <div className=" get-in-touch rounded-5 bg-light-blue container mt-5 p-2 py-5">

      <Form/>
      </div>
      <div className="mt-5 container">
        <h1 className="fs-1 text-center my-5 text-900">Our Address</h1>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31045.565453524334!2d77.71102804605204!3d13.431154355659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e560f39c6f41%3A0x71df08d5eae9ca2a!2sChikkaballapur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699772690301!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100'></iframe> */}
      </div>
    </section>
  )
}

export default Contact
