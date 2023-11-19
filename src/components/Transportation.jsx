import React from 'react'

function Transportation({title, subtitle, image}) {
  return (
    <div className='container-fluid bg-light'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center p-lg-5 p-3 mb-3">
           <div className="text">
           <h1 className='fs-1 text-900'>{title}</h1>
            <p className="text-secondary fs-6">{subtitle}</p>
            <div>
            <button className="main-btn rounded-5">Know More</button>
            </div>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
            <img src={image} alt="employee-image" className='w-100' />
        </div>
      </div>
    </div>
  )
}

export default Transportation
