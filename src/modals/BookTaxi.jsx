import React from 'react';
import { Modal, Button, Form, Col, Row, Image } from 'react-bootstrap';
import CarBook from '../components/CarBook';

function BookTaxi({ show, onHide }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // You can access form data using state variables or refs
    // Example: const formData = { name, email, password };
    // Send formData to your API or perform registration logic
    // Close the modal after successful registration
    // handleClose();
  };

  return (
    <Modal show={show} onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered className='modal'>
      <Modal.Header closeButton>
        <Modal.Title>Check Available Services</Modal.Title>
      </Modal.Header>
    <CarBook/>
    </Modal>
  );
}

export default BookTaxi;
