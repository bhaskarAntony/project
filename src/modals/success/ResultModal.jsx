import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ResultModal = ({ show, isSuccess, onClose, errorMessage }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>{isSuccess ? 'Error' : 'Booking Successful'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-black'>{isSuccess ? errorMessage : 'Your taxi has been booked successfully!'}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultModal;
