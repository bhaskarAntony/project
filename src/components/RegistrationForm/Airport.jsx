import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Airport() {
  return (
    <div>
    <form>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="form-group">
          <Form.Label>Pickup Location</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-geo-alt-fill text-main"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter Location"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className='p-3'
          />
        </InputGroup>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="form-group">
          <Form.Label>Airport Address</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-calendar-week text-main"></i>
          </InputGroup.Text>
          <Form.Control
          name='airportAddress'
          placeholder='Enter Airport Name'
            aria-label="airportAddress"
            aria-describedby="basic-addon1"
            className='p-3'
          />
        </InputGroup>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="form-group">
          <Form.Label>Pickup Date</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-stopwatch text-main"></i>
          </InputGroup.Text>
          <Form.Control
          type='date'
          name='date'
            placeholder='Select date'
            aria-label="date"
            aria-describedby="basic-addon1"
            className='p-3'
          />
        </InputGroup>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="form-group">
          <Form.Label>Pickup Time</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-hourglass-top text-main"></i>
          </InputGroup.Text>
          <Form.Control
              name='pickupTime'
            placeholder='Enter Pickup Time'
            aria-label="Pickup-time"
            aria-describedby="basic-addon1"
            className='p-3'
          />
        </InputGroup>            
        </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Airport
