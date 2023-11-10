import React from 'react'
import '../styles/choose.css'

const choosedata = [
    {
        title:"24/7 customers Services",
        image:"https://img.freepik.com/free-vector/24-hour-timer-clock_78370-1094.jpg?w=740&t=st=1699641767~exp=1699642367~hmac=db77a025702cbc25d3d8d8dd090a3dbc1e41bb0dae5f6c1ee2a1d61e8c9e7ae7"
    },
    {
        title:"Multi Brand Vehicle",
        image:"https://img.freepik.com/free-vector/three-dimensional-image-green-car-isolated-white-background_53876-40876.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"Professional Drivers",
        image:"https://img.freepik.com/free-vector/by-my-car-concept-illustration_114360-1137.jpg?w=740&t=st=1699641868~exp=1699642468~hmac=4bd9966d80d9362e0f0ba45caaf03224c0b3a3893553cf5fb28364009fe9eef0"
    },
    {
        title:"Price Transperancy",
        image:"https://img.freepik.com/free-photo/money-bill-green-dollar-banknote-with-wings_107791-16817.jpg?w=740&t=st=1699642117~exp=1699642717~hmac=13f33671613a2e8e4c0c2db3ac36d9ad36f54ce348da7c56655a69f60347ca22"
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
                <div className="choose-card bg-white text-center rounded-4 border-b p-3">
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
