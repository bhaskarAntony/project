import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function LocalTaxi() {
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
            />
          </InputGroup>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="form-group">
            <Form.Label>Pickup Date</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-calendar-week text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='date'
            name='date'
            placeholder='DD-MM-YYYY'
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="form-group">
            <Form.Label>Pickup Time</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-stopwatch text-main"></i>
            </InputGroup.Text>
            <Form.Control
            type='Time'
            name='time'
              placeholder='Select Time'
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="form-group">
            <Form.Label>Hours</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-hourglass-top text-main"></i>
            </InputGroup.Text>
            <Form.Select defaultValue="Select Hours">
            <option>Select Hours</option>
            <option>4 Hours- 40KM</option>
            <option>8 Hours- 80KM</option>
          </Form.Select>
          </InputGroup>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LocalTaxi
