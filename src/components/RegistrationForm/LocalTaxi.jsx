import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ResultModal from '../../modals/success/ResultModal';
import UserInfoModal from '../../modals/UserInfoModal/UserInfoModal';
import SpinnerModal from '../../modals/spinner/SpinnerModal';
import axios from 'axios';

function LocalTaxi() {
  const [formData, setFormData] = useState({
    Pickup_location: '',
    Pickup_date: '',
    Pickup_time: '',
    Rent_Hours: '',
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

  useEffect(() => {
    if (showUserInfoModal) {
      // When the UserInfoModal is open, watch for changes in userInfo
      // and trigger the API upload when userInfo changes
      uploadToApi(formData, true);
    }
  }, [formData.userInfo, showUserInfoModal]);

  const handleUserInfoModalClose = () => {
    setShowUserInfoModal(false);
  };

  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  const handleUserInfoModalOpen = () => {
    setShowUserInfoModal(true);
  };

  const handleBookCar = async (userInfo) => {
    setFormData((prevData) => ({
      ...prevData,
      userInfo: userInfo,
    }));

    // Set a flag to indicate that UserInfoModal should be closed
    const shouldCloseUserInfoModal = true;

    // Upload both form data and user info to the API
    await uploadToApi(formData, shouldCloseUserInfoModal);
  };

  const uploadToApi = async (data, shouldCloseUserInfoModal) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
      const response = await axios.post('http://localhost:3200/api/localTaxi/new', data);
      console.log(response.data);

      if (response.data.success) {
        setBookingSuccess(true);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setErrorMessage('An error occurred while processing your request.');
    } finally {
      setLoading(false);
      setShowSpinnerModal(false);

      // Close UserInfoModal if the flag is set
      if (shouldCloseUserInfoModal) {
        setShowUserInfoModal(false);
      }

      setShowResultModal(true);
    }
  };
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
            <Form.Label>Pickup Location</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='text'
            name='Pickup_location'
              placeholder="Enter Location"
              aria-label="pickup_loaction"
              aria-describedby="basic-addon1"
              className='p-3'
              onChange={handleChange}
            />
          </InputGroup>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
            <Form.Label>Hours</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-hourglass-top text-main"></i>
            </InputGroup.Text>
            <Form.Select defaultValue="Select Hours" className='p-3' name='Rent_Hours'   onChange={handleChange}>
            <option>Select</option>
            <option>4 Hours- 40KM</option>
            <option>8 Hours- 80KM</option>
          </Form.Select>
          </InputGroup>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
              <div className="form-group">
            <Form.Label>Pickup Date</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-calendar-week text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='date'
            name='Pickup_date'
              aria-label="pickupDate"
              aria-describedby="basic-addon1"
              className='p-3'
              onChange={handleChange}
            />
          </InputGroup>
            </div>
              </div>
              <div className="col-6">
              <div className="form-group">
            <Form.Label>Pickup Time</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-stopwatch text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='Time'
            name='Pickup_time'
              aria-label="pickupTime"
              aria-describedby="basic-addon1"
              className='p-3'
              onChange={handleChange}
            />
          </InputGroup>
            </div>
              </div>
            </div>
          </div>
        
         
          <div className="col-12">
          <label htmlFor="btn" className="form-label">* </label>
          <button type="button" className="btn-blue  py-3 w-100" onClick={handleUserInfoModalOpen} disabled={loading}>
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
  )
}

export default LocalTaxi
