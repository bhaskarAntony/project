import React from 'react'
import { Link } from 'react-router-dom'


function Discover({data}) {
  return (
    <div className='container-fluid py-5  p-2 p-lg-4 bg-light'>
      <h1 className="fs-2 text-900 text-center my-4">Discover How Our Service Works</h1>
      <div className="row">
        {
            data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="discover-card text-center p-2 mb-3">
                   <div className="text-center discover-body">
                   <i class="bi bi-box-fill fs-2 text-main"></i>
                        <h1 className="fs-4 text-900">{item.title}</h1>
                        <small className="d-block text-secondary">{item.description}</small>
                   </div>
                        <Link className='btn bg-transparent mt-3 fs-5 text-main'>Book <i class="bi bi-chevron-right"></i></Link>
                    </div>
                    <hr />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Discover
