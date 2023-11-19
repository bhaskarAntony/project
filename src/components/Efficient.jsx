import React from 'react'
import { Link } from 'react-router-dom'

function Efficient({data, title, subtitle}) {
  return (
    <section className='efficient container-fluid p-lg-5 p-3'>
      <span className="fs-4 text-main">Efficient</span>
      <h1 className="fs-1 text-bold">{title}</h1>
      <p className="fs-6">{subtitle}</p>
      <div className="row mt-4">
        {
            data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-4" key={index}>
                    <div className="efficient-card border bg-light  mb-3">
                        <img src={item.image} alt={item.title} className='w-100' />
                        <div className="p-2">
                            <h1 className="fs-4 text-bold mt-3">{item.title}</h1>
                            <p className="fs-6">{item.description}</p>

                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      <div className=" mt-4 btns d-flex align-item-center gap-3">
        <Link to='/' className='main-btn text-center text-decoration-none'>Learn More</Link>
        <Link to='/' className='btn-outline  border-0 text-center text-decoration-none'>Sign Up <i class="bi bi-chevron-right"></i></Link>
      </div>
    </section>
  )
}

export default Efficient
