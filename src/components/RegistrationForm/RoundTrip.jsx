import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RoundTrip() {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 p-1">
         <div className="form-group">
         <Form.Label>Pickup Location</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Pickup Location"
              aria-label="pickup-location"
              aria-describedby="basic-addon1"
              className='p-3'
              name='pickupLocation'
            />
          </InputGroup>
         </div>
         <div className="form-group">
         <Form.Label>Drop Location</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Drop Location"
              aria-label="drop-location"
              aria-describedby="basic-addon1"
              className='p-3'
              name='dropLocation'
            />
          </InputGroup>
         </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4 p-1">
         <div className="form-group">
         <Form.Label>Pickup date</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Pickup date"
              aria-label="Pickup date"
              aria-describedby="basic-addon1"
              className='p-3'
            name='pickupDate'
            />
          </InputGroup>
         </div>
         <div className="form-group">
         <Form.Label>Drop Date</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Drop date"
              aria-label="Drop-date"
              aria-describedby="basic-addon1"
              className='p-3'
               name='dropDate'
            />
          </InputGroup>
         </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4 p-1">
         <div className="form-group">
         <Form.Label>Pickup Time</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter pickup time"
              aria-label="pickup-time"
              aria-describedby="basic-addon1"
              className='p-3'
              name='pickupTime'
            />
          </InputGroup>
         </div>
         <div className="form-group">
         <Form.Label>Drop Times</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Drop time"
              aria-label="Drop-time"
              aria-describedby="basic-addon1"
              className='p-3'
              name='dropTime'
            />
          </InputGroup>
         </div>

        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button className="main-btn w-100">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default RoundTrip
