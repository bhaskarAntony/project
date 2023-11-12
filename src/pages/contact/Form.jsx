import React from 'react'
import './style.css'

function Form() {
  return (
    <div className='form p-3'>
                <h1 className="fs-1 text-900">GET IN TOUCH</h1>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <div className="form-left mb-4">
                <form action="post">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group mb-4">
                                <lable className="form-label">Name</lable>
                                <input type="text" name='name' placeholder='Enter Your Name' className="form-control p-3" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="form-group mb-4">
                                <lable className="form-label">Email</lable>
                                <input type="text" name='email' placeholder='Enter Your Email' className="form-control p-3" />
                            </div>
                        </div>
                    </div>
                    <div className="from-group mb-4">
                        <label htmlFor="subject" className="from-label">Subject</label>
                        <input type="text" name='subject' placeholder='Your Subject' className="form-control p-3" />
                    </div>
                    <div className="from-group mb-4">
                        <label htmlFor="message" className="from-label">Message</label>
                        <input type="text" name='message' placeholder='Your Message' className="form-control p-3" />
                    </div>
                    <button type="submit" className='main-btn px-4'>Send Message</button>
                </form>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="form-right rounded-5 py-5 p-3">
                <div className="d-flex gap-3 align-items-center mb-4">
                <div className="form-icon bg-green">
                <i class="bi bi-envelope-fill"></i>
                </div>
                <div className="">
                    <p className="fs-4">OUR EMAIL</p>
                    <span className="fs-6">Example@gmail.com</span>
                </div>
                </div>
                <div className="d-flex gap-3 align-items-center mb-4">
                <div className="form-icon bg-white text-black">
                <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div className="">
                    <p className="fs-4">OUR LOCATION</p>
                    <span className="fs-6">Chikkaballaour</span>
                </div>
                </div>
                <div className="d-flex gap-3 align-items-center mb-4">
                <div className="form-icon bg-green">
                <i class="bi bi-telephone-fill"></i>
                </div>
                <div className="">
                    <p className="fs-4">OUR PHONE</p>
                    <span className="fs-6">+919606729320</span>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
