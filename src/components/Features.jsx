import React from 'react'
import '../styles/features.css'

function Features() {
  return (
    <div className='container'>
      <div className="text-center">
      <h1 className="banner-heading text-900">
             Our Features
      </h1>
      <p className='subtitle text-lighter'>Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures <br /> and seamless mobility solutions.</p>
      </div>
      <div className="row p-3">
        <div className="col-12 col-md-12 col-lg-4">
            <div className="feature mt-2">
                <div className="f-icon float-lg-end mx-2 mb-3">
                <i class="bi bi-1-circle-fill"></i>
                </div>
                <div className="f-body">
                    <p className='card-heading serif text-900'><b>First class services</b></p>
                    <p>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                </div>
            </div>
            <div className="feature mt-5">
                <div className="f-icon float-lg-end mx-2 mb-3">
                <i class="bi bi-check2-circle"></i>
                </div>
                <div className="f-body">
                    <p className='card-heading'><b>24/7 road assistance</b></p>
                    <p>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <img src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car.png" alt="" className='w-100 anim-img mt-5' />
        </div>
            <div className="col-12 col-md-12 col-lg-4">
            <div className="feature mt-2">
                <div className="f-icon float-lg-end mx-2 mb-3">
                <i class="bi bi-award-fill"></i>
                </div>
                <div className="f-body">
                    <p className='card-heading '><b>Quality at Minimum Expense</b></p>
                    <p>Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
                </div>
            </div>
            <div className="feature mt-5">
                <div className="f-icon float-lg-end mx-2 mb-3">
                <i class="bi bi-suitcase2-fill"></i>
                </div>
                <div className="f-body">
                    <p className='card-heading text-bold text-900'><b>Free Pick-Up & Drop-Off</b></p>
                    <p>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Features
