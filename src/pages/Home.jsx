import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Choose from '../components/Choose'
import Cars from '../components/Cars'
import OneDayTrips from '../components/OneDayTrips'
import RSR_Services from '../components/RSR_Services'
import AboutUs from '../components/AboutUs'
import Working from '../components/Working'
import FaqSection from '../components/FaqSection'
import HomeHero from '../components/HomeHero'
import ContactNumber from '../components/ContactNumber'
import Transportation from '../components/Transportation'

const efficientData = [
  {
      title:"Step 1: Schedule Transportation",
      description:"Use our easy-to-use online platform to schedule transportation for your employees.",
      image:"https://img.freepik.com/free-photo/high-angle-woman-holding-laptop_23-2149954894.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  },
  {
      title:"Step 2: Pick-up and Drop-off",
      description:"Our professional drivers will pick up your employees from their designated locations and drop them off at your workplace.",
      image:"https://img.freepik.com/free-photo/woman-talking-with-taxi-driver-car_23-2149149583.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  },
  {
      title:"Step 3: On-Time Arrival",
      description:"We ensure that your employees arrive at work on time, every time.",
      image:"https://img.freepik.com/free-photo/smiling-young-pretty-caucasian-woman-holding-clock-doing-ok-sign-isolated-green_141793-33041.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
  }
]

function Home() {
  return (
    <div>
      <HomeHero/>
      <Working/>
      <Features/>
      <ContactNumber/>
      <RSR_Services/>
     
      <Choose/>
      {/* <Cars/> */}
      {/* <OneDayTrips/> */}
      <Transportation title="Discover the convenience of our
            employee transportation services and book with ease" subtitle="Our feature section showcases the main benefits of our services, providing a seamless experience for your employees" image="https://img.freepik.com/free-photo/business-team-way-meetings_329181-15205.jpg?w=740&t=st=1700284937~exp=1700285537~hmac=d09a79e40f69148734e0c7c467a07e987e3fea69aee78254b5ccb8df1ea02b92"/>
  
      <AboutUs/>
      <FaqSection/>
    </div>
  )
}

export default Home
