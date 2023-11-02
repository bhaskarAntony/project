import React from 'react'
import '../styles/services.css'
import outstationImg from '../images/outstation-cab.jpg'

const servicesdata = [
    {
        title:"Discover Your Next Adventure: Outstation Car Rentals Made Easy",
        description:"Are you itching to escape the hustle and bustle of the city and explore new destinations? Look no further! Our Outstation Car Rental service is your passport to adventure. Whether you're planning a weekend getaway, a family vacation, or a business trip, we've got you covered. With a fleet of well-maintained and comfortable cars, we make it easy to venture beyond city limits and explore the beauty that lies beyond.",
        image:"https://img.freepik.com/free-vector/city-driver-concept-illustration_114360-2648.jpg"
    },
    {
        title:"Your Ride, Your Way: Hourly Car Rental Solutions",
        description:"Introducing our Hourly Car Rental service, designed to offer you unparalleled flexibility and convenience for your short trips and urban escapades. Whether you need a vehicle for a quick shopping run, a brief meeting across town, or a spontaneous city exploration, we're here to provide the perfect solution. Our hourly car rentals give you the freedom to use a car for as long as you need it, without the constraints of long-term commitments. You'll appreciate the affordability of our rates, paying only for the hours you require the vehicle.",
        image:"https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-14861.jpg"
    }
]

function Services() {
  return (
    <div className="bg-light-blue p-3">
        <section className="services container py-5">
        {
            servicesdata.map((item, index)=>(

                <div className="row service-card border-left bg-white">
                    <div className="col-12 col-md-4 col-lg-6">
                            <div className="service-img">
                                <img src={item.image} alt="" className="w-100" />
                            </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                            <div className="service-description">
                                <h1 className="fs-1 text-900">{item.title}</h1>
                                <p className="fs-5 text-secondary">{item.description}</p>
                            </div>
                    </div>
                </div>
            ))
        }
    </section>
    </div>
  )
}

export default Services
