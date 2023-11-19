import React from 'react'

function Best({data, image}) {
  return (
    <section className='best-features p-lg-5 p-3 bg-light-blue'>

        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 mb-3">
                {
                    data.map((item, index)=>(
                        <div className="best-card mb-4">
                            <h1 className="fs-3 text-bold">{item.title}</h1>
                            <p className="fs-6">{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <img src={image} alt="" className="w-100" />
            </div>
        </div>
    </section>
  )
}

export default Best
