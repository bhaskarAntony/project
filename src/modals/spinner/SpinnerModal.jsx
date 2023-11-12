import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerModal = ({ show }) => {
  return (
    <Modal show={show} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </Modal.Body>
    </Modal>
  );
};

export default SpinnerModal;
