// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

// Functional component for the bottom navigation bar
const BottomNavigation = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className='d-lg-none text-center p-0 m-0 overflow-scroll'>
      <Nav className="mx-auto p-0 justify-content-between">
        <Nav.Item>
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faHome} />
            <small className="d-block">Home</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#search">
            <FontAwesomeIcon icon={faSearch} />
            <small className="d-block">Search</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#add">
            <FontAwesomeIcon icon={faPlus} />
            <small className="d-block">Add</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#favorites">
            <FontAwesomeIcon icon={faHeart} />
            <small className="d-block">Favorites</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#profile">
            <FontAwesomeIcon icon={faUser} />
            <small className="d-block">Profile</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNavigation;
