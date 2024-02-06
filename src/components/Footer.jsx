import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <section className='footer p-3 py-5 text-white bg-dark'>
      <div className="text-center">
        <h1 className="fs-2 text-900">The best car rentals in <span className="text-main">Karnataka</span></h1>   
        <p className="fs-6 text-white container"><span className="text-main">RSR TOURS AND TRAVELS</span> is a bangalore-based car rental company associated since 2023, we are a full service travel management company. A team of fine entrepreneurs move the company with their dedication, passion, vision and hard work which has resulted in transforming the organization’s operation with a healthy turnover size.</p>
      </div>
    <div className="px-5">
    <hr/>
    </div>
    <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <h1 className="fs-4 mb-4 text-main text-900">SERVICES</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Taxi For Local</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>OutStation Rental</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Airport Taxi</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>One Day Trips</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Destination Trips</Link></li>
            </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
        <h1 className="fs-4 mb-4 text-main text-900">MAIN SERVICES</h1>
        <ul className='m-0 p-0'>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Employee Transportation</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Bus Ticket Bookings</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Flight Ticket Bookings</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>All Types Of Packages Tours Available.</Link></li>
            </ul>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <h1 className="fs-4 mb-4 text-main text-900">QUICK LINKS</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>About Us</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Contact Us</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-6'>Privacy Policy</Link></li>
            </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h1 className="fs-4 mb-4 text-main text-900">QUICK CONTACT</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3 fs-6 d-flex gap-2'>
                <i class="bi bi-geo-alt-fill text-main"></i>
               <span>No.21/1, 1st Main, 1st Cross, RMS Colony, Bhattarahalli, Bangalore-560049</span>
                </li>
                <li className='mb-3 fs-6 d-flex gap-2'>
                <i class="bi bi-telephone-fill text-main"></i>
               <span>+919019121137</span>
                </li>
                <li className='mb-3 fs-6 d-flex gap-2'>
                <i class="bi bi-envelope-fill text-main"></i>
               <span>rsrtoursandtravelsblr@gmail.com</span>
                </li>
            </ul>
            <div className="social-icons d-flex gap-2 justify-content-around">
               <Link to='https://www.facebook.com/profile.php?id=100090124316314'>
               <div className="social-icon primary-bg text-white">
                <i class="bi bi-facebook"></i>
                </div>
               </Link>
               <Link to='/'>
               <div className="social-icon">
                <i class="bi bi-instagram"></i>
                </div>
               </Link>
               <Link to='/'>
               <div className="social-icon">
                <i class="bi bi-linkedin"></i>
                </div>
               </Link>
               <Link to='/'>
               <div className="social-icon">
                <i class="bi bi-whatsapp"></i>
                </div>
               </Link>   
            </div>
        </div>
    </div>

    </section>
  )
}

export default Footer
