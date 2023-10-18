import React, { useState } from 'react'
import '../styles/header.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown } from 'bootstrap';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className="nav-top bg-black text-white ">
        <p className="p-dark-small m-0">Outstanding cabs, Airport taxi, Hourly Car rental, Luxury cars rental<b>in Bangalore <i class="bi bi-arrow-right"></i></b></p>
      </div>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src="https://cdn-icons-png.flaticon.com/128/727/727173.png" alt="" /></a>
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
          <li className="nav-item">
          <div class="dropdown">
          <a class=" dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu w-100">
            <li><a class="dropdown-item" href="#">Taxi For Local</a>
            </li>
            <li><a class="dropdown-item" href="#">cabs for Outstation</a></li>
            <li><a class="dropdown-item" href="#">Airport taxi</a></li>
            <li><a class="dropdown-item" href="#">Luxury Car Rental</a></li>
          </ul>
        </div>
        <hr />
        <li className="nav-item"><a href="/" className="nav-link text-black nav-text">Employee Transportation</a></li>
          <hr />
          <li className="nav-item"><a href="/" className="nav-link text-black nav-text">Tours and Travels</a></li>
          <hr />
          <li className="nav-item"><a href="/" className="nav-link text-black nav-text">About Us</a></li>
          <hr />
          <a href="/register" className='text-decoration-none mb-3'>
     <button class="w-100 main-btn w-100" type="button"><i class="bi bi-taxi-front"></i> Book a Car</button>
     </a>
     <a href="/register" className='text-decoration-none'>
     <button class="w-100 main-btn bg-black w-100 mt-4" type="button"><i class="bi bi-person-lines-fill"></i> Contact Us</button>
     </a>
          </li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services <i class="bi bi-chevron-down mx-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="/course-data-science">Taxi For Local</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/course-cloud-computing">cabs for Outstation</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/course-digital-marketing">Airport taxi</a></li>   
            <li className='list-group-item'><a class="dropdown-item" href="#">Luxury Car Rental</a></li>   
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Wedding Car Rental<i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="/gallery">Gallery</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/blogs">Blogs</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/events">Events</a></li>   
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'><a class="dropdown-item" href="/about">Why Be Practical?</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/contacts">Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Companies <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="#">Corporate Training</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="#">HR Services</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/contacts">Hire Trained Graduates</a></li>   
          </ul>
        </li>
        <li className="nav-item mx-3 mt-2">
       
        </li>
      </ul>
      <a href="/register" className='text-decoration-none'>
     <button class="w-100 main-btn" type="button"><i class="bi bi-taxi-front"></i> Book a Car</button>
     </a>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
