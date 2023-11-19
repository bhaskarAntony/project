import React from 'react'
import Hero from './Hero'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'
import Efficient from '../../components/Efficient'
import Best from '../../components/Best'

const efficientDataLocalTaxi = [
  {
      title: "Step 1: Schedule Your Ride",
      description: "Use our easy-to-use online platform to schedule a local taxi for your journey.",
      image: "https://img.freepik.com/free-photo/taxi-sign-yellow-car-near-city-center-with-skyscrapers-modern-automobile-passenger-car-driving-street-around-office-buildings-night-urban-metropolis-close-up-3d-render-animation_482257-69178.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  },
  {
      title: "Step 2: Professional Pick-up and Drop-off",
      description: "Our skilled drivers will pick you up from your designated location and ensure a comfortable drop-off at your destination.",
      image: "https://img.freepik.com/free-photo/two-male-friends-drinking-beer-summer-terrace-pub_496169-2777.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  },
  {
      title: "Step 3: Timely Arrival",
      description: "Count on us for punctual arrivals, ensuring you reach your destination on time, every time.",
      image: "https://img.freepik.com/free-photo/good-looking-business-woman-texting-message-while-walking-street_197531-6925.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  }
];


const bestDataLocalTaxi = [
  {
      title: "Safe and Reliable Local Taxi Service",
      description: "Experience the highest standards of safety, reliability, and comfort with our local taxi service. Our seasoned drivers and well-maintained vehicles guarantee a secure and smooth journey for all passengers."
  },
  {
      title: "Comfort at Your Fingertips",
      description: "Indulge in a comfortable and convenient travel experience with our local taxi service. Our vehicles are equipped with modern amenities, ensuring an enjoyable and stress-free journey for our passengers."
  },
  {
      title: "Efficiency Meets Punctuality",
      description: "We take pride in delivering efficient and timely local taxi services. Our drivers are not only punctual but also well-versed in navigating the local routes, ensuring you reach your destination on time, every time."
  }
];

const DiscoverDataLocalTaxi = [
  {
      title: "Easy and Convenient Booking Process",
      description: "Experience the simplicity of our user-friendly booking system, making it effortless for you to schedule your local taxi ride with just a few clicks."
  },
  {
      title: "Enjoy a Comfortable and Reliable Taxi Ride",
      description: "Indulge in the pleasure of a comfortable and reliable journey with our local taxi service. Our vehicles are designed to provide a smooth and enjoyable ride for all passengers."
  },
  {
      title: "Affordable and Transparent Taxi Pricing",
      description: "Discover cost-effective and transparent pricing for your local taxi rides. No hidden fees – just straightforward and budget-friendly rates for a convenient travel experience."
  }
];



function LocalTaxi() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation title="Explore the convenience of our local taxi services and book with ease." subtitle="Our featured section highlights the key advantages of our local taxi services, ensuring a seamless and enjoyable experience for all passengers. From prompt pickups to courteous drivers, we prioritize your comfort and convenience. Discover the unparalleled benefits of choosing our taxi service for your local transportation needs." image="https://img.freepik.com/free-photo/businessman-taking-taxi-rain_1098-14910.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Efficient data={efficientDataLocalTaxi} title="Our local taxi service is designed to streamline your travel, offering a hassle-free and efficient solution for all your commuting requirements." subtitle="Our local taxi service simplifies the process of getting you to your destination efficiently. With our streamlined system, you can ensure that you arrive on time and ready for your journey"/>
      <Cars/>
      <Choose/>
      <Best data={bestDataLocalTaxi} image="https://img.freepik.com/free-photo/nightlife-street-illuminated-taxi-city_1203-6148.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"/>
      <Discover data={DiscoverDataLocalTaxi}/>
    </div>
  )
}

export default LocalTaxi
