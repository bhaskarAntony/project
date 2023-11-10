import React from 'react'
import '../styles/features.css'

function Features() {
  return (
    <div className='container-fluid  bg-green py-5 p-3'>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-card">
           <div className="text-center">
           <i class="bi bi-suitcase2-fill"></i>
           </div>
            <p className='card-heading text-bold text-900'><b>Free Pick-Up & Drop-Off</b></p>
            <p className='fs-5'>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-card">
            <div className="text-center">
            <i class="bi bi-1-circle-fill"></i>
            </div>
            <p className='card-heading serif text-900'><b>First class services</b></p>
            <p className='fs-5'>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-card">
          <div className="text-center">
          <i class="bi bi-award-fill"></i>
          </div>
            <p className='card-heading '><b>Quality at Minimum Expense</b></p>
            <p className='fs-5'>Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <div className="feature-card">
            <div className="text-center">
            <i class="bi bi-check2-circle"></i>
            </div>
            <p className='card-heading'><b>24/7 road assistance</b></p>
            <p className='fs-5'>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
