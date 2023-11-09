import React from 'react'
import '../styles/choose.css'

const choosedata = [
    {
        title:"24/7 customers Services",
        image:"https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg"
    },
    {
        title:"Multi Brand Vehicle",
        image:"https://img.freepik.com/free-vector/hand-drawn-muscle-car-illustration_23-2149432254.jpg"
    },
    {
        title:"Professional Drivers",
        image:"https://img.freepik.com/free-vector/limousine-concept-illustration_114360-6858.jpg"
    },
    {
        title:"Price Transperancy",
        image:"https://img.freepik.com/free-vector/rental-car-service-abstract-concept-illustration_335657-2482.jpg"
    }
]
function Choose() {
  return (
    <section className='choose bg-gray1 container-fluid py-5'>
        <div className="text-center">
            <h1 className="fs-1 text-900 text-white">Why You Choose Us?</h1>
            <p className="text-white fs-5">
            Choosing us means choosing excellence and reliability.  <br />We stand out because of our unwavering commitment to your satisfaction.
            </p>
        </div>
        <img src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/facts-left.png" alt="choose-image" className="choose-img" />
    <div className="container p-lg-2 p-2">
    <div className="row">
       {
        choosedata.map((item, index)=>(
            <div className="col-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center" key={index}>
                <div className="choose-card bg-white text-center rounded-2 border-b p-3">
                    <img src={item.image} alt="" className='w-100 mb-3 choose-card-image'/>
                    <h1 className="fs-lg-2 fs-4 text-900">{item.title}</h1>
                </div>
            </div>
        ))
       }
      </div>
    </div>
    </section>
  )
}

export default Choose
