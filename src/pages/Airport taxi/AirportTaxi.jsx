import React from 'react'
import Hero from './Hero'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'
import Efficient from '../../components/Efficient'
import Best from '../../components/Best'

const efficientDataAirportTaxi = [
  {
      title: "Step 1: Schedule Your Ride",
      description: "Use our easy-to-use online platform to schedule an airport taxi for your journey.",
      image: "https://img.freepik.com/free-photo/man-with-bag-outside_1303-5839.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 2: Professional Pick-up and Drop-off",
      description: "Our skilled drivers will pick you up from your designated location and ensure a comfortable drop-off at your destination for your airport journey.",
      image: "https://img.freepik.com/free-photo/valet-holding-baggage-side-view_23-2149901449.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 3: Timely Arrival",
      description: "Count on us for punctual arrivals, ensuring you reach the airport on time, every time.",
      image: "https://img.freepik.com/free-photo/young-businessman-holding-coffee-cup-looking-mobile-phone_23-2148176168.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  }
];

const bestDataAirportTaxi = [
  {
      title: "Safe and Reliable Airport Taxi Service",
      description: "Experience the highest standards of safety, reliability, and comfort with our airport taxi service. Our seasoned drivers and well-maintained vehicles guarantee a secure and smooth journey for all passengers."
  },
  {
      title: "Comfort at Your Fingertips",
      description: "Indulge in a comfortable and convenient travel experience with our airport taxi service. Our vehicles are equipped with modern amenities, ensuring an enjoyable and stress-free journey for our passengers."
  },
  {
      title: "Efficiency Meets Punctuality",
      description: "We take pride in delivering efficient and timely airport taxi services. Our drivers are not only punctual but also well-versed in navigating the routes, ensuring you reach the airport on time, every time."
  }
];

const DiscoverDataAirportTaxi = [
  {
      title: "Easy and Convenient Booking Process",
      description: "Experience the simplicity of our user-friendly booking system, making it effortless for you to schedule your airport taxi ride with just a few clicks."
  },
  {
      title: "Enjoy a Comfortable and Reliable Taxi Ride",
      description: "Indulge in the pleasure of a comfortable and reliable journey with our airport taxi service. Our vehicles are designed to provide a smooth and enjoyable ride for all passengers."
  },
  {
      title: "Affordable and Transparent Taxi Pricing",
      description: "Discover cost-effective and transparent pricing for your airport taxi rides. No hidden fees – just straightforward and budget-friendly rates for a convenient travel experience."
  }
];




function AirportTaxi() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation title="Explore the convenience of our airport taxi services and book with ease." subtitle="Our featured section highlights the key advantages of our airport taxi services, ensuring a seamless and enjoyable experience for all passengers. From prompt pickups to courteous drivers, we prioritize your comfort and convenience. Discover the unparalleled benefits of choosing our taxi service for your airport transportation needs." image="https://img.freepik.com/free-photo/full-shot-people-traveling-together_23-2149272091.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Efficient data={efficientDataAirportTaxi} title="Our airport taxi service is designed to streamline your travel, offering a hassle-free and efficient solution for all your commuting requirements." subtitle="Our airport taxi service simplifies the process of getting you to the airport efficiently. With our streamlined system, you can ensure that you arrive on time and ready for your journey"/>


      <Cars/>
      <Choose/>
      <Best data={bestDataAirportTaxi} image="https://img.freepik.com/free-photo/medium-shot-man-holding-phone_23-2149272095.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Discover data={DiscoverDataAirportTaxi}/>
    </div>
  )
}

export default AirportTaxi
