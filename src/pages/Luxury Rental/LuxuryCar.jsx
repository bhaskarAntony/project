import React from 'react'
import Hero from './Hero'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'
import Efficient from '../../components/Efficient'
import Best from '../../components/Best'

const efficientDataLuxuryCarRental = [
  {
      title: "Step 1: Schedule Your Luxurious Ride",
      description: "Use our easy-to-use online platform to schedule a luxurious car rental for your special occasion or executive travel.",
      image: "https://img.freepik.com/free-photo/businesswoman-sitting-backseat-taxi_23-2149236713.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 2: Professional Chauffeur Service",
      description: "Our skilled chauffeurs will provide a top-notch service, ensuring a comfortable and elegant experience during your luxurious journey.",
      image: "https://img.freepik.com/free-photo/handsome-bearded-smiling-top-manager-black-suit-working-his-laptop-backseat-car_496169-590.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  },
  {
      title: "Step 3: Arrival in Style",
      description: "Experience a grand entrance with our luxurious cars. Count on us for punctual arrivals, ensuring you make a stylish entrance to your destination.",
      image: "https://img.freepik.com/free-photo/handsome-bearded-manager-entering-his-car-while-standing-outdoors-streets-city-near-modern-office-center_496169-510.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"
  }
];

const bestDataLuxuryCarRental = [
  {
      title: "Elegance and Sophistication",
      description: "Indulge in the epitome of luxury and sophistication with our premium car rental service. Our fleet of high-end vehicles and professional chauffeurs ensure a lavish experience for all passengers."
  },
  {
      title: "Luxury at Your Fingertips",
      description: "Experience the ultimate in comfort and convenience with our luxury car rental service. Our vehicles are equipped with top-of-the-line amenities, ensuring a luxurious and stress-free journey for our passengers."
  },
  {
      title: "Effortless Elegance and Punctuality",
      description: "We take pride in delivering an effortless and elegant luxury car rental experience. Our chauffeurs are not only punctual but also well-versed in providing a seamless and stylish journey to your destination."
  }
];

const DiscoverDataLuxuryCarRental = [
  {
      title: "Easy and Elegant Booking Process",
      description: "Experience the simplicity of our user-friendly booking system, making it effortless for you to schedule your luxury car rental for special occasions or executive travel with just a few clicks."
  },
  {
      title: "Indulge in Luxury and Comfort",
      description: "Treat yourself to the indulgence of a luxurious and comfortable journey with our premium car rental service. Our vehicles are designed to provide a smooth and enjoyable ride for all passengers."
  },
  {
      title: "Transparent Pricing for Luxury",
      description: "Discover transparent and competitive pricing for your luxury car rental. No hidden fees – just straightforward and premium rates for an elegant travel experience."
  }
];




function LuxuryCar() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation title="Explore the convenience of our luxury car rental services and book with ease." subtitle="Our featured section highlights the key advantages of our luxury car rental services, ensuring a seamless and enjoyable experience for all passengers. From premium vehicles to professional chauffeurs, we prioritize your comfort and style. Discover the unparalleled benefits of choosing our luxury car rental for your special occasions or executive travel." image="https://img.freepik.com/free-photo/young-handsome-successful-manager-black-suit-entering-rear-seat-his-car-near-modern-business-center-street-big-city_496169-559.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      
      <Efficient data={efficientDataLuxuryCarRental} title="Our luxury car rental service is designed to enhance your travel experience, offering a hassle-free and premium solution for all your commuting requirements." subtitle="Indulge in the epitome of luxury with our streamlined airport transportation service. With top-notch vehicles and professional chauffeurs, you can ensure that you arrive at the airport in style, on time, and ready for your journey"/>



      <Cars/>
      <Choose/>
      <Best data={bestDataLuxuryCarRental} image="https://img.freepik.com/free-photo/grey-luxury-sedan-car-sunset_114579-4045.jpg?size=626&ext=jpg&ga=GA1.1.1215326194.1700409923&semt=ais"/>
      <Discover data={DiscoverDataLuxuryCarRental}/>
    </div>
  )
}

export default LuxuryCar
