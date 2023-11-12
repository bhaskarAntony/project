import React from 'react'
import '../styles/cars.css'

const carsData = [
    {
        name:"sedan",
        price:"120",
        image:"https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
        company:"sedan",
        categorie:"day"
    },
    {
        name:"sedan",
        price:"120",
        image:"https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
        company:"sedan",
        categorie:"day"
    },
    {
        name:"sedan",
        price:"120",
        image:"https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
        company:"sedan",
        categorie:"day"
    }   
]
function Cars() {
  return (
    <div className="bg-light-blue py-5">
        <h1 className="text-center fs-1 text-900">Available Cars for <span className="text-main">
        Rent</span></h1>
 <section className='cars container p-lg-5 p-3'>
        <div className="row justify-content-center">
            {
                carsData.map((item, index)=>(
                    <div className="col-12 col-md-2 col-lg-4 d-flex justify-content-center">
                        <div className="car-card bg-white p-3">
                            <div className="car-header">
                                <div className="car-card-hightlights d-flex justify-content-end">
                                    <span className='fs-5 fav'><i class="bi bi-heart"></i></span>
                                </div>
                                <img src={item.image} alt={item.name} className="w-100 rounded-2" />
                              
                            </div>
                            <div className="car-card-body">
                            <p className="mt-2 fs-3 text-900"><i class="bi bi-taxi-front-fill mx-2"></i>{item.name}</p>
                                <div className="rating d-flex gap-2 align-items-center">
                                <i class="bi bi-star-fill fs-6 text-warning"></i>
                                <i class="bi bi-star-fill fs-6 text-warning"></i>
                                <i class="bi bi-star-fill fs-6 text-warning"></i>
                                <i class="bi bi-star-fill fs-6 text-warning"></i>
                                <i class="bi bi-star-fill fs-6 text-warning"></i>
                                <small  className=''>(5.0)</small>
                                </div>
                                <div className="location-car px-1 py-3 bg-light-blue mt-2">
                                    <div className="row">
                                        <div className="col-6 align-items-center d-flex">
                                        <span className="fs-6 d-flex gap-2 text-secondary">  <i class="bi bi-geo-alt-fill text-main"></i> Bangalore/india</span>
                                        </div>
                                        <div className="col-6 align-items-center d-flex justify-content-end">
                                        <span className="fs-5 text-main">&#8377;{item.price} <span className="text-black">/ </span><small className=' text-secondary'>{item.categorie}</small></span>
                                        </div>
                                    </div>
                              
                            
                                </div>
                                <button className="gray-btn fs-6 w-100 mt-2"> <i class="bi bi-calendar-minus mx-2"></i>RENT NOW</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    <div className="text-center">
        <button className="main-btn">View All Cars</button>
    </div>
    </div>
   
  )
}

export default Cars
