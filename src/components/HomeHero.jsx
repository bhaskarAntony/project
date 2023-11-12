import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import BookForm from './RegistrationForm/BookForm'
import ApplyNow from '../Helpers/ApplyNow'
import { Carousel } from 'react-bootstrap';

const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                    <h1 className="card-heading fs-4 text-white text-start">Best Car Rentals in Bangalore</h1>
                    <h1 className="heading text-main text-900 text-start">{item.heading}</h1>
                    <p className="text-white fs-5 my-4 text-start">{item.subheading}</p>
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
