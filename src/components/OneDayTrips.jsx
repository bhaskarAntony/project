import React, { useEffect, useState } from 'react'
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
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to showing 3 slides
  useEffect(() => {
    // Check the screen width and update the number of slides to show
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1); // On smaller screens, show only 1 slide

      }
      else if(window.innerWidth<=800) {
        setSlidesToShow(2); // On wider screens, show 3 slides
      } else if(window.innerWidth<=900) {
        setSlidesToShow(2); // On wider screens, show 3 slides
      }
     
      else{
          setSlidesToShow(3); // On wider screens, show 3 slides
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
          autoplay: true,
          autoplaySpeed: 1000, // Change delay as needed
          prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
          nextArrow: <button className="slick-next">Next</button>, // Add next arrow
        };
  return (
    <section className='one-day-trips container-fluid bg-blur py-5'>
        <h1 className="fs-1 text-center text-900">One day <span className="text-main">
        Trips</span></h1>
        <p className="fs-5 text-center text-secondary">
"Discover One-Day Wonders: Unforgettable Day Trips <br /> Just a Stone's Throw Away"</p>
<div className="container ">
          <div className="row w-100 d-flex justify-conent-center">
          <s {...settings}>
            {oneDaytripData.map((item) => (
                <div className="col-12 col-md-6 col-lg-4 ">
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
            </s>
              </div>
          </div>
    </section>
  )
}

export default OneDayTrips
