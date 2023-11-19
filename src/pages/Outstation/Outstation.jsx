import React from 'react'
import Hero from './Hero'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'
import Efficient from '../../components/Efficient'
import Best from '../../components/Best'

const efficientDataOutstationCarRental = [
  {
      title: "Step 1: Schedule Your Trip",
      description: "Use our easy-to-use online platform to schedule an outstation car rental for your round trip or one-way journey.",
      image: "https://img.freepik.com/free-photo/happy-young-woman-wearing-red-shirt-sunglasses-looking-side-while-holding-alarm-clock-with-plane-tickets-blue-suitcase-white-wall_141793-31232.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 2: Professional Pick-up and Drop-off",
      description: "Our skilled drivers will pick you up from your designated location and ensure a comfortable drop-off at your destination for your outstation journey.",
      image: "https://img.freepik.com/free-photo/handsome-male-taxi-driver-costume_23-2149204562.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 3: Timely Arrival",
      description: "Count on us for punctual arrivals, ensuring you reach your destination on time, every time, whether it's a round trip or a one-way journey.",
      image: "https://img.freepik.com/free-photo/young-male-holding-alarm-clock-with-thumb-up-t-shirt-jacket-looking-cheerful-front-view_176474-23202.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  }
];

const bestDataOutstationCarRental = [
  {
      title: "Safe and Reliable Outstation Car Rental Service",
      description: "Experience the highest standards of safety, reliability, and comfort with our outstation car rental service. Our seasoned drivers and well-maintained vehicles guarantee a secure and smooth journey for all passengers on round trips or one-way trips."
  },
  {
      title: "Comfort at Your Fingertips",
      description: "Indulge in a comfortable and convenient travel experience with our outstation car rental service. Our vehicles are equipped with modern amenities, ensuring an enjoyable and stress-free journey for our passengers on round trips or one-way trips."
  },
  {
      title: "Efficiency Meets Punctuality",
      description: "We take pride in delivering efficient and timely outstation car rental services. Our drivers are not only punctual but also well-versed in navigating the routes, ensuring you reach your destination on time, every time, whether it's a round trip or a one-way journey."
  }
];

const DiscoverDataOutstationCarRental = [
  {
      title: "Easy and Convenient Booking Process",
      description: "Experience the simplicity of our user-friendly booking system, making it effortless for you to schedule your outstation car rental for round trips or one-way journeys with just a few clicks."
  },
  {
      title: "Enjoy a Comfortable and Reliable Car Ride",
      description: "Indulge in the pleasure of a comfortable and reliable journey with our outstation car rental service. Our vehicles are designed to provide a smooth and enjoyable ride for all passengers on round trips or one-way trips."
  },
  {
      title: "Affordable and Transparent Car Rental Pricing",
      description: "Discover cost-effective and transparent pricing for your outstation car rental. No hidden fees – just straightforward and budget-friendly rates for a convenient travel experience on round trips or one-way journeys."
  }
];




function OutStation() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation title="Explore the convenience of our outstation car rental services and book with ease." subtitle="Our featured section highlights the key advantages of our outstation car rental services, ensuring a seamless and enjoyable experience for all passengers. From prompt pickups to courteous drivers, we prioritize your comfort and convenience. Discover the unparalleled benefits of choosing our car rental service for your round trips and one-way journeys." image="https://img.freepik.com/free-photo/side-view-man-working-as-valet_23-2150321022.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Efficient data={efficientDataOutstationCarRental} title="Our outstation car rental service is designed to streamline your travel, offering a hassle-free and efficient solution for all your commuting requirements." subtitle="Our car rental service simplifies the process of getting you to your destination efficiently. With our streamlined system, you can ensure that you arrive on time and ready for your round trip or one-way journey"/>

      <Cars/>
      <Choose/>
      <Best data={bestDataOutstationCarRental} image="https://img.freepik.com/free-photo/cheerful-woman-white-blouse-beige-pants-sits-car-holds-boyfriend-hand-brunette-man-black-suit-eyeglasses-smiles-poses-near-airport_197531-27129.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Discover data={DiscoverDataOutstationCarRental}/>
    </div>
  )
}

export default OutStation
