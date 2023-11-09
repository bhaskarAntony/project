import React from 'react'
import '../styles/working.css'

function Working() {
  return (
    <section className='working p-5'>
      <h1 className="fs-1 py-5 text-center text-900">HOW IT WORKS</h1>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <div className="working-card border">
                    <div className="working-icon">
                    <i class="bi bi-taxi-front"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">1</span></div>
                    <p className="fs-3 text-900">BOOK A CAR</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="working-card">
                    <div className="working-icon">
                    <i class="bi bi-taxi-front"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">1</span></div>
                    <p className="fs-3 text-900">BOOK A CAR</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="working-card">
                    <div className="working-icon">
                    <i class="bi bi-taxi-front"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">1</span></div>
                    <p className="fs-3 text-900">BOOK A CAR</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="working-card">
                    <div className="working-icon">
                    <i class="bi bi-taxi-front"></i>
                    </div>
                    <div className="working-count"><span className="fs-4">1</span></div>
                    <p className="fs-3 text-900">BOOK A CAR</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Working
