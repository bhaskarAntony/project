import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RoundTrip() {
  return (
    <div>
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
            name="Pickup_location"
              placeholder="Enter Pickup Location"
              aria-label="pickup-location"
              aria-describedby="basic-addon1"
              className=''
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
            type='text'
              placeholder="Enter Drop Location"
              aria-label="drop-location"
              aria-describedby="basic-addon1"
              className=''
              name='Drop_location'
            />
          </InputGroup>
         </div>

        </div>

        <div className="col-12">
         <div className="form-group">
         <Form.Label>Pickup date</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Pickup date"
              aria-label="EnterPickup date"
              aria-describedby="basic-addon1"
              className=''
            name='Pickup_date'
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
              className=''
               name='Drop_date'
            />
          </InputGroup>
         </div>

        </div>

        <div className="col-12">
         <div className="form-group">
         <Form.Label>Pickup Time</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
            <i class="bi bi-geo-alt-fill text-main"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Pickup time"
              aria-label="pickup-time"
              aria-describedby="basic-addon1"
              className=''
              name='Pickup_time'
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
              className=''
              name='Drop_time'
            />
          </InputGroup>
         </div>

        </div>
        <div className="col-12">
          <button className="btn-blue py-3 w-100">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default RoundTrip
