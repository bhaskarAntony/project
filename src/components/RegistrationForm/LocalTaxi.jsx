import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function LocalTaxi() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="form-group">
            <Form.Label>Pickup Location</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='text'
            name='pickup_location'
              placeholder="Enter Location"
              aria-label="pickup_loaction"
              aria-describedby="basic-addon1"
              className='p-3'
            />
          </InputGroup>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
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
            name='pickup_date'
              aria-label="pickupDate"
              aria-describedby="basic-addon1"
              className='p-3'
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
            name='pickup_time'
              aria-label="pickupTime"
              aria-describedby="basic-addon1"
              className='p-3'
            />
          </InputGroup>
            </div>
              </div>
            </div>
          </div>
        
          <div className="col-12 col-sm-12 col-md-6 col-lg-2">
            <div className="form-group">
            <Form.Label>Hours</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-hourglass-top text-main"></i>
            </InputGroup.Text>
            <Form.Select defaultValue="Select Hours" className='p-3'>
            <option>Select</option>
            <option>4 Hours- 40KM</option>
            <option>8 Hours- 80KM</option>
          </Form.Select>
          </InputGroup>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-2">
            <label htmlFor="btn" className="form-label">check now</label>
           <button className="main-btn py-3 w-100">Book Now</button>
           </div>
        </div>
      </form>
    </div>
  )
}

export default LocalTaxi
