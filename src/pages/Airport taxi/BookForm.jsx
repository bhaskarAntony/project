import React from 'react'

function BookForm() {
  return (
    <div className='bg-white py-4'>
     <div className='carBook p-5 pt-3 pb-5 bg-white p-2'>
        <h1 className="fs-4 text-bold mb-2">Request a Apointment</h1>
      <form action="post">
        <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name='name' placeholder='Your Name' className="form-control" required />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">Mobile Number</label>
            <input type="text" name='phone' placeholder='Your Phone Number' className="form-control" required/>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name='email' placeholder='Your Email Address' className="form-control" required />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Company Name(optional)</label>
            <input type="text" name='email' placeholder='company name' className="form-control" />
        </div>
      
        <button className="main-btn w-100 py-3 mt-3 rounded-5">Book Apointment</button>

      </form>
    </div>
    </div>
  )
}

export default BookForm
