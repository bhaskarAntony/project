import React from 'react'
import './styles/best.css'
const bestData = [
    {
        title:"Safe and Reliable Transportation",
        description:"We offer a wide range of transportation services that prioritize safety, reliability, and comfort. Our experienced drivers and well-maintained vehicles ensure a smooth and secure journey for all passengers."
    },
    {
        title:"Comfortable and Convenient",
        description:"With our transportation services, you can enjoy a comfortable and convenient travel experience. Our vehicles are equipped with modern amenities to make your journey enjoyable and stress-free."
    },
    {
        title:"Efficient and Timely",
        description:"We pride ourselves on providing efficient and timely transportation services. Our drivers are punctual and knowledgeable, ensuring that you reach your destination on time."
    }
]
function Best() {
  return (
    <section className='best-features p-lg-5 p-3 bg-light-blue'>

        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 mb-3">
                {
                    bestData.map((item, index)=>(
                        <div className="best-card mb-4">
                            <h1 className="fs-3 text-bold">{item.title}</h1>
                            <p className="fs-6">{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <img src="https://img.freepik.com/free-photo/nightlife-street-illuminated-taxi-city_1203-6148.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais" alt="" className="w-100" />
            </div>
        </div>
    </section>
  )
}

export default Best
