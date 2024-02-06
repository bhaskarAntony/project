import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function OnewayTrip() {
  return (
    <div>
    <form>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
          <Form.Label>Pickup Location</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-geo-alt-fill text-main"></i>
          </InputGroup.Text>
          <Form.Control
          type='text'
          name='Pickup_location'
            placeholder="Pickup Location"
            aria-label="pickup location"
            aria-describedby="basic-addon1"
            className=''
          />
        </InputGroup>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
            <div className="form-group">
          <Form.Label>Pickup Date</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-calendar-week text-main"></i>
          </InputGroup.Text>
          <Form.Control
          type='date'
          name='Pickup_date'
            aria-label="pickup_date"
            aria-describedby="basic-addon1"
            className=''
          />
        </InputGroup>
          </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
            <div className="form-group">
          <Form.Label>Pickup Time</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
          <i class="bi bi-stopwatch text-main"></i>
          </InputGroup.Text>
          <Form.Control
          type='Time'
          name='Pickup_location'
            aria-label="pickup_time"
            aria-describedby="basic-addon1"
            className=''
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
          <i class="bi bi-stopwatch text-main"></i>
          </InputGroup.Text>
          <Form.Control
          type='text'
          placeholder='Drop Location'
          name='Drop_location'
            aria-label="drop_location"
            aria-describedby="basic-addon1"
            className=''
          />
        </InputGroup>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="btn" className="form-label">check now</label>
         <button className="btn-blue py-3 w-100">Book Now</button>
         </div>
      </div>
    </form>
  </div>
  )
}

export default OnewayTrip
