// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faHeart, faUser, faPlaneDeparture, faVanShuttle, faCarSide, faBuilding, faContactCard } from '@fortawesome/free-solid-svg-icons';

// Functional component for the bottom navigation bar
const BottomNavigation = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className='d-lg-none text-center p-0 m-0 overflow-auto dark-shadow'>
      <Nav className="w-100  p-0 d-flex justify-content-between">
        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} className='text-main' />
            <small className="d-block fs-6">Home</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/outstation">
            <FontAwesomeIcon icon={faCarSide} className='text-main'/>
            <small className="d-block fs-6">Outstation</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Employee-Transportation-Services-in-Bangalore">
            <FontAwesomeIcon icon={faBuilding} className='text-main' />
            <small className="d-block fs-6">Corporate</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Airport-Taxi-Services-in-Bangaloret">
            <FontAwesomeIcon icon={faPlaneDeparture} className='text-main'/>
            <small className="d-block fs-6">Airport Taxi</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNavigation;
