import React from 'react'
import Hero from './Hero'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'
import Efficient from '../../components/Efficient'
import Best from '../../components/Best'

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

const employeeBestData = [
  {
      title:"Safe and Reliable Transportation",
      description:"We offer a wide range of transportation services that prioritize safety, reliability, and comfort. Our experienced drivers and well-maintained vehicles ensure a smooth and secure journey for all passengers."
  },
  {
      title:"Comfortable and Convenient",
      description:"With our transportation services, you can enjoy a comfortable and convenient travel experience. Our vehicles are equipped with modern amenities to make your journey enjoyable and stress-free."
  },
  {
      title:"Efficient and Timely",
      description:"We pride ourselves on providing efficient and timely transportation services. Our drivers are punctual and knowledgeable, ensuring that you reach your destination on time."
  }
]

const DiscoverDataEmployeeTransportation = [
  {
      title: "Effortless Employee Transportation Scheduling",
      description: "Simplify the process of scheduling employee transportation with our user-friendly booking system. Easily coordinate rides for your team without any hassle or delays."
  },
  {
      title: "Reliable and Comfortable Employee Rides",
      description: "Ensure your employees enjoy a reliable and comfortable journey with our transportation services. Our vehicles are designed to provide a secure and pleasant commute for all passengers."
  },
  {
      title: "Cost-Effective and Transparent Employee Transportation Rates",
      description: "Benefit from budget-friendly and transparent pricing for your employee transportation needs. Our straightforward rates ensure affordability without any hidden costs, making it easy for your organization to manage transportation expenses."
  }
];

function EmployeeTransportation() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation title="Discover the convenience of our
            employee transportation services and book with ease" subtitle="Our feature section showcases the main benefits of our services, providing a seamless experience for your employees" image="https://img.freepik.com/free-photo/business-team-way-meetings_329181-15205.jpg?w=740&t=st=1700284937~exp=1700285537~hmac=d09a79e40f69148734e0c7c467a07e987e3fea69aee78254b5ccb8df1ea02b92"/>

           <Efficient data={efficientData} title="Streamline Your Employee Transportation with Ease" subtitle="Our employee transportation service simplifies the process of getting your employees to work efficiently. With our streamlined system, you can ensure that your employees arrive on time and ready to work."/>  
      <Cars/>
      <Choose/>
      <Best data={employeeBestData} image="https://img.freepik.com/free-photo/business-couple-traveling-by-train_329181-13734.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"/>
      <Discover data={DiscoverDataEmployeeTransportation }/>
    </div>
  )
}

export default EmployeeTransportation
