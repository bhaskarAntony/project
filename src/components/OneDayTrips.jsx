import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import ReadMore from '../Helpers/ReadMore';
import '../styles/trips.css'

const oneDaytripData = [
    {
        name:"Mysore One Day Trip",
        image:"https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1",
        desc:"Mysore Ranks among South India’s top travel gateways, owing to its plethora of ancient and magnificent palaces, beautifully carved temples, informative museums, distinct art forms, diversified culture and wonderful hills."

    },
    {
        name:"Mysore One Day Trip",
        image:"https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1",
        desc:"Mysore Ranks among South India’s top travel gateways, owing to its plethora of ancient and magnificent palaces, beautifully carved temples, informative museums, distinct art forms, diversified culture and wonderful hills."

    },
    {
        name:"Mysore One Day Trip",
        image:"https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1",
        desc:"Mysore Ranks among South India’s top travel gateways, owing to its plethora of ancient and magnificent palaces, beautifully carved temples, informative museums, distinct art forms, diversified culture and wonderful hills."

    },
    {
        name:"Mysore One Day Trip",
        image:"https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1",
        desc:"Mysore Ranks among South India’s top travel gateways, owing to its plethora of ancient and magnificent palaces, beautifully carved temples, informative museums, distinct art forms, diversified culture and wonderful hills."

    },
    
]
function OneDayTrips() {
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [carouselInterval, setCarouselInterval] = useState(1500);
    const [carouselPaused, setCarouselPaused] = useState(false);
      
    useEffect(() => {
        const handleResize = () => {
          // Adjust the number of items per slide based on the screen width
          if (window.innerWidth < 800) {
            setItemsPerSlide(1);
            setCarouselInterval(1000);
          }
          else if(window.innerWidth < 1260) {
              setItemsPerSlide(2);
              setCarouselInterval(1500);
            } else {
            setItemsPerSlide(3);
            setCarouselInterval(1500);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const handleCarouselHover = () => {
        // Pause the Carousel when the user hovers over it
        setCarouselPaused(true);
      };
    
      const handleCarouselLeave = () => {
        // Resume the Carousel when the user stops hovering
        setCarouselPaused(false);
      };
    
  
    const carouselItems = oneDaytripData.reduce((accumulator, current, index) => {
      if (index % itemsPerSlide === 0) {
        accumulator.push([]);
      }
      accumulator[accumulator.length - 1].push(current);
      return accumulator;
    }, []);
  return (
    <section className='one-day-trips container-fluid bg-blur py-5'>
        <h1 className="fs-1 text-center text-900">One day <span className="text-main">
        Trips</span></h1>
        <p className="fs-5 text-center text-secondary">
"Discover One-Day Wonders: Unforgettable Day Trips <br /> Just a Stone's Throw Away"</p>
     <Carousel
      interval={carouselInterval}
      >
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index}
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="container ">
          <div className="row w-100 d-flex justify-conent-center">

            {slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4  d-flex align-items-center w-100 justify-content-center">
              <div className="trip-card rounded-4 border-b p-2" data-aos="zoom-in-left">
                <div className="trip-card-header p-2">
                        <img src={item.image} alt="" className='w-100 rounded-3' />
                </div>
                <div className="trip-card-body p-2">
                    <h3 className="fs-3 text-900 text-black">{item.name}</h3>
                    <span className="fs-5">
                        <ReadMore text={item.desc} maxLength={50}/>
                    </span>
                    <button className="gray-btn fs-6 w-100 mt-2"> <i class="bi bi-whatsapp mx-2"></i>Enquire About Trip</button>
                </div>
              </div>
                </div>
            ))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
  )
}

export default OneDayTrips
