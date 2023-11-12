import React from 'react'
import { Link } from 'react-router-dom'

function ContactNumber() {
  return (
    <div className='bg-banner banner text-white py-5 text-center'>
      <h1 className="fs-1 text-900">Do You Want Know More Details,, Feel Free To Contact</h1>
      <p className="fs-3"><span className="text-main">Ramesh RS</span> -  Operation Head</p>
      <Link to='tel:+919900197160' className='main-btn text-decoration-none mt-4'> <i class="bi bi-telephone-fill mx-2"></i> Call Now</Link>
    </div>
  )
}

export default ContactNumber
