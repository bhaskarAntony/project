import React from 'react'
import '../styles/services.css'
import { Link } from 'react-router-dom'
const Services = [
    {
        title:"Hourly Car Rental",
        description:"Your Ride, Your Way: Hourly Car Rental Solutions",
        image:"https://img.freepik.com/free-vector/front-car-concept-illustration_114360-7948.jpg?size=626&ext=jpg"
    },
    {
        title:"Airport Taxi",
        description:"Swift Airport Taxi Services for Seamless Travel",
        image:"https://img.freepik.com/free-vector/order-ride-concept-illustration_114360-5095.jpg?size=626&ext=jpg"
    },
    {
        title:"OutStation car Rental",
        description:"Swift Airport Taxi Services for Seamless Travel",
        image:"https://img.freepik.com/free-vector/road-trip-concept-illustration_114360-5614.jpg?w=740&t=st=1699777438~exp=1699778038~hmac=dea4f60a9fb20f0490472f5b4a6cff5aa1158c0979ebd95dfd5983cffe91eea5"
    },
    {
        title:"Luxury Car Rentals",
        description:"Best Luxury Car Rental Services",
        image:"https://img.freepik.com/free-vector/sports-car-concept-illustration_114360-12258.jpg?w=740&t=st=1699777361~exp=1699777961~hmac=f3cc8e0dda68cfdacd122ce7b50b636a5e76446eed32117d990326d0bdf99168"
    }
]
function RSR_Services() {

  return (
    <div className='bg-light-blue py-5'>
        <h1 className="text-center text-900 fs-1 py-2">RSR Tours & Travels Services</h1>
       <div className="container-fluid p-4">
       <div className="row">
            {
                Services.map((item, index)=>(
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3" key={index}>
                        <div className="service-card  border p-0 overflow-hidden rounded-5 bg-white p-2">
                           <div className="overflow-hidden rounded-4 service-header">
                           <img src={item.image} alt={item.title} className="w-100 rounded-4" />
                           </div>
                           <div className="service-card-body d-flex flex-column justify-content-around p-2 pt-2">
                           <p className="fs-3 text-900">{item.title}</p>
                            <p className="fs-5 text-secondary">{item.description}</p>
                            <Link to='/' className='main-btn text-center text-decoration-none'>
                                Learn More
                           </Link>
                           </div>
                          
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
    </div>
  )
}

export default RSR_Services
