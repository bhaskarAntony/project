// UserInfoModal.jsx

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserInfoModal = ({ show, onClose, onBookCar }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNow = () => {
    onBookCar(userInfo);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName" className='mt-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className='p-3'
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mt-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className='p-3'
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className='mt-2'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className='p-3'
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <button className='main-btn w-100' onClick={handleBookNow}>
          Book Now
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfoModal;
