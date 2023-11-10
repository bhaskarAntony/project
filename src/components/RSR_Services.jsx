import React from 'react'
import '../styles/services.css'
import { Link } from 'react-router-dom'
const Services = [
    {
        title:"Hourly Car Rental",
        description:"Your Ride, Your Way: Hourly Car Rental Solutions",
        image:"https://img.freepik.com/free-photo/female-hands-close-up-with-car-keys_1303-13658.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"Airport Taxi",
        description:"Swift Airport Taxi Services for Seamless Travel",
        image:"https://img.freepik.com/free-photo/full-shot-people-traveling-together_23-2149272091.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"OutStation car Rental",
        description:"Swift Airport Taxi Services for Seamless Travel",
        image:"https://img.freepik.com/free-photo/man-valet-holding-key-full-shot_23-2149901399.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"Luxury Car Rentals",
        description:"Best Luxury Car Rental Services",
        image:"https://img.freepik.com/free-photo/young-business-woman-sitting-car_1303-22820.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    }
]
function RSR_Services() {

  return (
    <div className='bg-light-blue'>
        <h1 className="text-center text-900 fs-1 py-2">RSR Tours & Travels Services</h1>
       <div className="container-fluid p-5">
       <div className="row">
            {
                Services.map((item, index)=>(
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3" key={index}>
                        <div className="service-card  border p-0 overflow-hidden rounded-5 bg-white">
                           <div className="overflow-hidden">
                           <img src={item.image} alt={item.title} className="w-100" />
                           </div>
                           <div className="service-card-body d-flex flex-column justify-content-around p-2 pt-5">
                           <p className="fs-3">{item.title}</p>
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
