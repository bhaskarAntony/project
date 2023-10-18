import React from 'react'

function LocalTaxi() {
  return (
    <div>
      <form>
   <div className="row">
    <div className="col12 col-md-6 col-lg-6">
    <div className="form-group">
    <label htmlFor="time" className="form-label">Select Location</label>
    <div className="input-group mb-3">
        <span className="input-group-text  primary-bg" id="basic-addon1"><i class="bi bi-geo-alt-fill text-white fs-2"></i></span>
        <input type="text" class="form-control p-3" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    </div>
    </div>
    <div className="col12 col-md-6 col-lg-6">
    <div className="form-group">
    <label htmlFor="time" className="form-label">Select Date</label>
    <div className="input-group mb-3">
        <span className="input-group-text primary-bg" id="basic-addon1"><i class="bi bi-calendar-week text-white fs-2"></i></span>
        <input type="date" class="form-control p-3" placeholder="Pickup Date" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    </div>
    </div>
   </div>
   <div className="row mt-3">
    <div className="col12 col-md-6 col-lg-6">
    <div className="form-group">
        <label htmlFor="time" className="form-label">Select Time</label>
    <div className="input-group mb-3">
        <span className="input-group-text  primary-bg" id="basic-addon1"><i class="bi bi-alarm fs-2 text-white"></i></span>
        <input type="time" class="form-control p-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    </div>
    </div>
    <div className="col12 col-md-6 col-lg-6">
    <div className="form-group">
    <label htmlFor="time" className="form-label">Select Duration</label>
    <div className="input-group mb-3">
        <span className="input-group-text primary-bg" id="basic-addon1"><i class="bi bi-hourglass-top text-white fs-2"></i></span>
       <select name="duration" id="duration" className='form-control'>
        <option value="40">4 Hours- 40KM</option>
        <option value="80">8 Hours- 80KM</option>
       </select>
        </div>
    </div>
    </div>
   </div>
      </form>
    </div>
  )
}

export default LocalTaxi
