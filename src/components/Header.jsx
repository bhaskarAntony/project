import React, { useState } from 'react'
import '../styles/header.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown } from 'bootstrap';
import ApplyNow from '../Helpers/ApplyNow';
import { Link } from 'react-router-dom';
import brand from '../images/logoRSR.jpg'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className="nav-top bg-green text-black fw-bold d-none d-lg-block">
        <p className="p-dark-small m-0">Experience hassle-free outstation car rentals, airport taxis, and local taxis with convenient booking options.<b><i class="bi bi-arrow-right"></i></b></p>
      </div>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a>
    <Button variant="black" onClick={handleShow} className='bg-black d-lg-none'>
    <i class="bi bi-list text-white fs-1"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-900'><span className='text-main'>RSR</span> Tours and Travels</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         <ul className='text-black list-unstyled  p-0'>
          <li className="nav-item"><a href="/" className="nav-link text-black nav-text">Home</a></li>
          <hr />
          <p className="fs-5 text-main">Our Services</p>
          <li className="nav-item"><a href="/local_taxi" className="nav-link text-black nav-text">Taxi for Locals</a></li>
          <hr />
          <li className="nav-item"><a href="/outstation" className="nav-link text-black nav-text">cabs for Outstation</a></li>
          <hr />
          <li className="nav-item"><a href="/Airport-Taxi-Services-in-Bangalore" className="nav-link text-black nav-text">Airport taxi</a></li>
          <hr />
          <li className="nav-item"><a href="/car/luxury" className="nav-link text-black nav-text">Luxury Car Rental</a></li>
          <hr />
          
          <li className="nav-item">
        <li className="nav-item"><a href="/Employee-Transportation-Services-in-Bangalore" className="nav-link text-black nav-text">Employee Transportation</a></li>
          <hr />
          <li className="nav-item"><a href="/about" className="nav-link text-black nav-text">About Us</a></li>
          <hr />
          <a href="/register" className='text-decoration-none mb-3'>
     <button class="w-100 main-btn w-100" type="button"><i class="bi bi-taxi-front"></i> Book a Car</button>
     </a>
     <a href="/register" className='text-decoration-none'>
     <a href='/contact' class="w-100 main-btn bg-black w-100 mt-4 text-decoration-none d-flex align-items-center justify-content-center gap-2" type="button"><i class="bi bi-person-lines-fill"></i> Contact Us</a>
     </a>
          </li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto justify-content-between mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services <i class="bi bi-chevron-down mx-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="/local_taxi">Taxi For Local</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/outstation">cabs for Outstation</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/Airport-Taxi-Services-in-Bangalore">Airport taxi</a></li>   
            <li className='list-group-item'><a class="dropdown-item" href="/car/luxury">Luxury Car Rental</a></li>   
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/Employee-Transportation-Services-in-Bangalore">Employee Transportation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Our Vehicles</a>
        </li>
        <li className='nav-item'><a class="nav-link" href="/about">About Us</a></li>
        <li className='nav-item'><a class="nav-link" href="/contact">Contact Us</a></li>
        <li className="nav-item mx-3 mt-2">
       
        </li>
      </ul>
      <ApplyNow text={'Book Now'}/>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
