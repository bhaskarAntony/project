import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import BookForm from './RegistrationForm/BookForm'
import ApplyNow from '../Helpers/ApplyNow'
import { Carousel } from 'react-bootstrap';
import ReadMore from '../Helpers/ReadMore';

const home = [
  {
    heading: "Hourly Rentals for Ultimate Flexibility",
    subheading: "Need a car for just a few hours? Our hourly rental service is designed for your short-term transportation needs. Whether it's a quick meeting or a short excursion, RSR Tours provides you with the flexibility to rent a car by the hour.",
    tag: "Hourly Car Rental",
  },
  {
    heading: "Outstation Journeys Made Comfortable",
    subheading: "Planning a trip outside the city? RSR Tours provides reliable outstation transportation services. Enjoy a comfortable ride to your destination with our experienced drivers and well-maintained fleet. Your journey, our priority.",
    tag: "Outstation Car Rental in Bangalore",
  },
  {
    heading: "Reliable Airport Taxi Services",
    subheading: "Start and end your air travel with ease. RSR Tours offers reliable and timely airport taxi services. Our professional drivers ensure you reach the airport on time and provide a seamless experience for your airport transfers.",
    tag: "Airport Car Rental in Bangalore",
  },
  {
    heading: "Elevate Your Travel Experience with Luxury Car Rentals",
    subheading: "Indulge in the epitome of sophistication and style with our luxury car rental services. Experience the thrill of driving or being chauffeured in top-tier vehicles that redefine opulence. Whether for a special occasion or a taste of luxury, our premium fleet is designed to exceed your expectations. Elevate your journey with our luxury car rental options.",
    tag: "Luxury Car Rental in Bangalore",
  },
  {
    heading: "Efficient and Reliable Employee Transportation Solutions",
    subheading: "Streamline your workforce's commute with our dedicated employee transportation services. We understand the importance of punctuality and reliability in corporate travel. Our fleet of well-maintained vehicles and experienced drivers ensure that your employees reach their destination comfortably and on time. Enhance productivity and employee satisfaction with our tailored transportation solutions",
    tag: "Employee Transportation Services in Bangaore",
  },
];
function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true)
  const [homeData, sethomeData] = useState([]);
  const openModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleCarouselHover = () => {
    setPaused(true);
  };

  const handleCarouselLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  const numberOfSlides = home.length;
  return (
    <div className='home-hero container-fluid p-3'>
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-7">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          id="vertical-carousel"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {home.map((item, index) => (
            <Carousel.Item key={index}>
                  <div className="hero-text p-lg-5 p-md-3 p-3">
                    <h1 className=" fs-4 text-main text-start font-pt">Welcome to RSR Tours - Your Complete Transportation Solution</h1>
                    <small>Discover a world of convenience with RSR Tours, where we redefine transportation services to cater to all your needs. From car rentals to hourly rentals, airport taxi services, local taxi rides, and outstation journeys, we've got you covered.</small>
                    <h2 className="heading text-black text-900 text-start font-pt">{item.heading}</h2>
                    <p className="text-secondary fs-5 my-4 text-start font-pt"><ReadMore text={item.subheading} maxLength={100}/></p>
                    <div className="carousel-footer w-100 d-flex flex-wrap">
                      <button className='main-btn bg-dark text-white  m-2 hero-btn py-3'>Explore All Cars<i class="bi bi-chevron-double-right"></i></button>
                      <button className='main-btn m-2 hero-btn py-3' onClick={openModal}>Check Avail Cars <i class="bi bi-chevron-double-right"></i></button>
                    </div>
                   
                  </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className="col-12 col-md-12 col-lg-5">
                <div className="homeHero-image">
                <BookForm/>
                </div>
            </div>
      </div>
      
    </div>
  )
}

export default HomeHero
