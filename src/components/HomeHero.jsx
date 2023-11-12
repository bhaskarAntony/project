import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import BookForm from './RegistrationForm/BookForm'
import ApplyNow from '../Helpers/ApplyNow'
import { Carousel } from 'react-bootstrap';
import ReadMore from '../Helpers/ReadMore';

const home = [
  {
    heading: "Flexible Hourly Car Rentals for Your Convenience",
    subheading: "Discover the freedom of flexible travel with our hourly car rental service. Perfect for short trips, errands, or city explorations, our fleet of reliable vehicles awaits your command. Enjoy the convenience of on-demand transportation, hassle-free bookings, and pay only for the time you need.",
    tag: "Hourly Car Rental",
  },
  {
    heading: "Explore Beyond Boundaries with Our Outstation Car Rentals",
    subheading: "Embark on unforgettable journeys with our outstation car rental services. Whether it's a weekend getaway or an extended road trip, our well-maintained fleet and experienced drivers ensure a comfortable and safe travel experience. Discover new horizons with the convenience of door-to-door service and transparent pricing",
    tag: "Outstation Car Rental in Bangalore",
  },
  {
    heading: "Seamless Airport Transfers with Our Car Rental Services",
    subheading: "Start and end your journey with ease using our airport car rental services. Enjoy stress-free airport transfers with our punctual and professional drivers. From the runway to your destination, our reliable fleet ensures a smooth and comfortable ride. Make your travel experience seamless with our convenient airport car rental options.",
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
        <div className="col-12 col-md-12 col-lg-8">
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
                    <h1 className="card-heading fs-4 text-white text-start">{item.tag}</h1>
                    <h1 className="heading text-main text-900 text-start">{item.heading}</h1>
                    <p className="text-white fs-5 my-4 text-start"><ReadMore text={item.subheading} maxLength={100}/></p>
                    <div className="carousel-footer w-100 d-flex flex-wrap">
                      <button className='main-btn bg-white text-black  m-2 hero-btn py-3'>Explore All Cars<i class="bi bi-chevron-double-right"></i></button>
                      <button className='main-btn m-2 hero-btn py-3' onClick={openModal}>Check Avail Cars <i class="bi bi-chevron-double-right"></i></button>
                    </div>
                   
                  </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
                <div className="homeHero-image">

                </div>
            </div>
      </div>
      <BookForm/>
    </div>
  )
}

export default HomeHero
