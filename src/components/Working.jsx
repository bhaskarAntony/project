import React from 'react'
import '../styles/working.css'

function Working() {
  return (
    <section className='working p-5 '>
      <h1 className="fs-1 py-5 text-center text-900 py-5">HOW IT WORKS</h1>
      <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="working-card border">
                    <div className="working-icon primary-bg">
                    <i class="bi bi-taxi-front"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">1</span></div>
                    <div className="working-header"></div>
                   <div className="working-body">
                   <p className="fs-3 text-900 mt-2">SELECT DATE</p>
                   <span className="fs-6 text-secondary">Enjoy Your Booked Car</span>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="working-card border">
                    <div className="working-icon bg-gray1">
                    <i class="bi bi-file-text"></i>
                    </div>
                    <div className="working-count primary-bg"><span className="fs-4">2</span></div>
                    <div className="working-header"></div>
                   <div className="working-body">
                   <p className="fs-3 text-900 mt-2">BOOK A CAR</p>
                   <span className="fs-6 text-secondary">Enjoy Your Booked Car</span>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="working-card border">
                    <div className="working-icon primary-bg">
                    <i class="bi bi-cash"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">3</span></div>
                    <div className="working-header"></div>
                   <div className="working-body">
                   <p className="fs-3 text-900 mt-2">PAYMENTS</p>
                   <span className="fs-6 text-secondary">Enjoy Your Booked Car</span>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="working-card border">
                    <div className="working-icon bg-gray1">
                    <i class="bi bi-emoji-smile"></i>
                    </div>
                    <div className="working-count primary-bg"><span className="fs-4">4</span></div>
                    <div className="working-header"></div>
                   <div className="working-body">
                   <p className="fs-3 text-900 mt-2">ENJOY THE CAR</p>
                   <span className="fs-6 text-secondary">Enjoy Your Booked Car</span>
                   </div>
                </div>
            </div>
            
        
        </div>
      </div>
    </section>
  )
}

export default Working
