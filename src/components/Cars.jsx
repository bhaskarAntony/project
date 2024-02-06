import React, { useEffect, useState } from 'react'
import '../styles/cars.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    const [slidesToShow, setSlidesToShow] = useState(6); // Default to showing 3 slides
    useEffect(() => {
        // Check the screen width and update the number of slides to show
        const handleResize = () => {
          if (window.innerWidth <= 600) {
            setSlidesToShow(2); // On smaller screens, show only 1 slide
          } else if(window.innerWidth<=900) {
            setSlidesToShow(3); // On wider screens, show 3 slides
          }
          else{
              setSlidesToShow(6); // On wider screens, show 3 slides
          }
        };
      
        // Call the handleResize function initially and add a resize event listener
        handleResize();
        window.addEventListener('resize', handleResize);
      
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 1000, // Change delay as needed
      };
  return (
    <div className="bg-light-blue py-5">
        <h1 className="text-center fs-1 text-900">Available Cars for <span className="text-main">
        Rent</span></h1>
 <section className='cars container p-lg-5 p-3'>
        <div className="row justify-content-center">
        <Slider {...settings}>
                {carsData.map((item, index) => (
                  <div className="col-12 col-md-4 col-lg-3 p-2" key={index}>
                    <div className="car-card">
                      <img src={item.image} alt="company" />
                    </div>
                  </div>
                ))}
              </Slider>
        </div>
    </section>
    <div className="text-center">
        <Link to='/all-cars-Rentals' className='text-decoration-none'>  <button className="main-btn">View All Cars</button></Link>
      
    </div>
    </div>
   
  )
}

export default Cars
