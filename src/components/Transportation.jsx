import React from 'react'

function Transportation() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center p-lg-5 p-3 mb-3">
           <div className="text">
           <h1 className='fs-1 text-900'>Discover the convenience of our <span className="text-main">
            employee transportation </span> services and book with ease</h1>
            <p className="text-secondary fs-6">Our feature section showcases the main benefits of our services, providing a seamless experience for your employees</p>
            <div>
            <button className="main-btn rounded-5">Know More</button>
            </div>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
            <img src="https://img.freepik.com/free-photo/business-team-way-meetings_329181-15205.jpg?w=740&t=st=1700284937~exp=1700285537~hmac=d09a79e40f69148734e0c7c467a07e987e3fea69aee78254b5ccb8df1ea02b92" alt="employee-image" className='w-100' />
        </div>
      </div>
    </div>
  )
}

export default Transportation
