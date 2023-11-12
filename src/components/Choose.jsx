import React from 'react'
import '../styles/choose.css'
import ApplyNow from '../Helpers/ApplyNow'

const choosedata = [
    {
        title:"24/7 customers Services",
        image:"bi-clock-history"
    },
    {
        title:"Multi Brand Vehicle",
        image:"bi-box-seam"
    },
    {
        title:"Professional Drivers",
        image:"bi-person-check-fill"
    },
    {
        title:"Price Transperancy",
        image:"bi-wallet2"
    }
]
function Choose() {
  return (
    <section className='choose bg-black container-fluid py-5 bg-texture'>
        <div className="text-center">
            <h1 className="fs-1 text-900 text-white">Why You Choose Us?</h1>
            <p className="text-white fs-5">
            Choosing us means choosing excellence and reliability.  <br />We stand out because of our unwavering commitment to your satisfaction.
            </p>
        </div>
    <div className="container p-lg-2 p-2">
    <div className="row">
       {
        choosedata.map((item, index)=>(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center" key={index}>
                <div className="choose-card text-center rounded-4 border-b p-3">
                    <i className={`bi ${item.image}`}></i>
                    <h1 className="fs-lg-2 fs-4 text-900 mt-3">{item.title}</h1>
                </div>
            </div>
        ))
       }
      </div>
    </div>
    <div className="text-center">
        <ApplyNow text='Rent a car'/>
    </div>
    </section>
  )
}

export default Choose
