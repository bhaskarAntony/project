import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import SpinnerModal from '../../modals/spinner/SpinnerModal';
import ResultModal from '../../modals/success/ResultModal';
import UserInfoModal from '../../modals/UserInfoModal/UserInfoModal';

function Airport() {
  const [formData, setFormData] = useState({
    Pickup_location: '',
    Pickup_date: '',
    Pickup_time: '',
    Drop_location: '',
    userInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const [showSpinnerModal, setShowSpinnerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle closing of UserInfoModal
  const handleUserInfoModalClose = () => {
    setShowUserInfoModal(false);
  };
  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  // Handle opening of UserInfoModal
  const handleUserInfoModalOpen = () => {
    setShowUserInfoModal(true);
  };

  // Handle booking a car with user information
  const handleBookCar = async (userInfo) => {
    setFormData({
      ...formData,
      userInfo: userInfo,
    });

    // Upload both form data and user info to the API
    await uploadToApi(formData);
  };

  // Upload both form data and user info to the API
  const uploadToApi = async (data) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
      const response = await axios.post('http://localhost:3200/api/airport/new', data);
      console.log(response.data);

      // Assuming the server response has a 'success' property indicating success
      if (response.data.success) {
        setBookingSuccess(true);
      } else {
        setErrorMessage(response.data.message); // Set the error message from the server
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setErrorMessage('An error occurred while processing your request.');
    } finally {
      setLoading(false);
      setShowSpinnerModal(false);
      setShowResultModal(true);
    }
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <Form.Label>Pickup Location</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-geo-alt-fill text-main"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="Pickup_location"
                  placeholder="Enter Location"
                  aria-label="pickup_location"
                  aria-describedby="basic-addon1"
                  className="p-3"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <Form.Label>Pickup Date</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="bi bi-calendar-week text-main"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="date"
                      name="Pickup_date"
                      aria-label="pickupDate"
                      aria-describedby="basic-addon1"
                      className="p-3"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <Form.Label>Pickup Time</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="bi bi-stopwatch text-main"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="Time"
                      name="Pickup_time"
                      aria-label="pickupTimeo"
                      aria-describedby="basic-addon1"
                      className="p-3"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Form.Label>Drop Location</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-stopwatch text-main"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="Drop_location"
                  placeholder="Drop Location"
                  aria-label="dropLocation"
                  aria-describedby="basic-addon1"
                  className="p-3"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>
          <div className="col-12">
          <label htmlFor="btn" className="form-label">* </label>
          <button type="button" className="btn-blue bg-warning py-3 w-100" onClick={handleUserInfoModalOpen} disabled={loading}>
            Book Now
          </button>
        </div>
        </div>
      </form>
      <SpinnerModal show={showSpinnerModal} />
      <ResultModal
        show={showResultModal}
        onClose={handleResultModalClose}
        isSuccess={bookingSuccess}
        errorMessage={errorMessage}
        onClick={handleUserInfoModalOpen}
      />
      <UserInfoModal
        show={showUserInfoModal}
        onClose={handleUserInfoModalClose}
        onBookCar={handleBookCar}
      />
    </div>
  );
}

export default Airport;
