import React from 'react'

function CarBook() {
  return (
    <div className='carBook p-5 pt-3 pb-5'>
      <form action="post">
        <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name='name' placeholder='Your Name' className="form-control p-3" />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">Mobile Number</label>
            <input type="text" name='phone' placeholder='Your Phone Number' className="form-control p-3" />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name='email' placeholder='Your Email Address' className="form-control p-3" />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Service</label>
          <select name="service" id="service" className="form-control p-3">
            <option value="" selected>Select Service</option>
            <option value="local">Local Taxi Rental</option>
            <option value="local">Airport Taxi</option>
            <option value="local">Outstation Taxi</option>
            <option value="local">One Way Trip</option>
            <option value="local">Round Trip</option>
            <option value="local">Luxury Car Rental</option>
            <option value="local">Others</option>
          </select>
        </div>
        <button className="main-btn w-100 py-3 mt-3 rounded-5">Check Available</button>

      </form>
    </div>
  )
}

export default CarBook
