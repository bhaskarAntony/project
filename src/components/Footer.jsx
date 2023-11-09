import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='footer p-3 py-5 text-white'>
      <div className="text-center">
        <img src="https://www.wordpress.codeinsolution.com/carveo/wp-content/uploads/sites/32/2023/09/Logo-Light@2x-e1694590782371.png" alt="" />
        <h1 className="fs-3">The best car rentals in Bangalore</h1>
      </div>
    <div className="px-5">
    <hr />
    </div>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
            <h1 className="fs-2 mb-4 text-main">SERVICES</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>Taxi For Local</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>OutStation Rental</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>Airport Taxi</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>One Day Trips</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>Destination Trips</Link></li>
            </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <h1 className="fs-2 mb-4 text-main">QUICK LINKS</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>About Us</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>Contact Us</Link></li>
                <li className='mb-3'><Link to='/' className='nav-link fs-5'>Privacy Policy</Link></li>
               
            </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <h1 className="fs-2 mb-4 text-main">QUICK CONTACT</h1>
            <ul className='m-0 p-0'>
                <li className='mb-3 fs-5 d-flex gap-2'>
                <i class="bi bi-geo-alt-fill text-main"></i>
               <span> Callison Laney Buoy Building W 13th Parks Suite 559, Denver</span>
                </li>
                <li className='mb-3 fs-5 d-flex gap-2'>
                <i class="bi bi-building text-main"></i>
               <span>Office 478 Vienna, AU 92101</span>
                </li>
                <li className='mb-3 fs-5 d-flex gap-2'>
                <i class="bi bi-telephone-fill text-main"></i>
               <span>+0 (555) 123 45 67</span>
                </li>
                <li className='mb-3 fs-5 d-flex gap-2'>
                <i class="bi bi-envelope-fill text-main"></i>
               <span>carveo@support.com</span>
                </li>
               
            </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <h1 className="fs-2 mb-4 text-main">FALLOW US ON</h1>
            <div className="social-icons d-flex gap-2 justify-content-around p-3">
               <Link to='/'>
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
