// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faHeart, faUser, faPlaneDeparture, faVanShuttle, faCarSide, faBuilding } from '@fortawesome/free-solid-svg-icons';

// Functional component for the bottom navigation bar
const BottomNavigation = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className='d-lg-none text-center p-0 m-0 overflow-scroll'>
      <Nav className="mx-auto p-0 justify-content-between">
        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} />
            <small className="d-block fs-6">Home</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#search">
            <FontAwesomeIcon icon={faCarSide} />
            <small className="d-block fs-6">Cars</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#add">
            <FontAwesomeIcon icon={faBuilding} />
            <small className="d-block fs-6">Services</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#favorites">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <small className="d-block fs-6">Airport Taxi</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#profile">
            <FontAwesomeIcon icon={faVanShuttle} />
            <small className="d-block fs-6">Tempos</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNavigation;
