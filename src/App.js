import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ScrollProgressBar from './Helpers/ScrollProgressbar'
import Progressbar from '../src/Helpers/Scrollbar/Progressbar'
import ScrollToTopButton from './Helpers/BookButton/ScrollToTopButton'
import PageLoader from './modals/PageLoader'
import BottomNavigation from './components/bottom nav/BottomNavigation '
import Cars from './pages/All cars/Cars'
import Hero from './pages/employee transportation/Hero'
import EmployeeTransportation from './pages/employee transportation/EmployeeTransportation'
import LocalTaxi from './pages/Local taxi/LocalTaxi'
import OutStation from './pages/Outstation/Outstation'
import AirportTaxi from './pages/Airport taxi/AirportTaxi'
import LuxuryCar from './pages/Luxury Rental/LuxuryCar'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds (adjust the duration as needed)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); 
  return (
    <div className='overflow-hidden'>
       {
       loading ? (
        <PageLoader />
      ) : (
        <>
        <Header/>
        <BottomNavigation/>
        <ScrollProgressBar/>
         <Progressbar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/all-cars-Rentals' element={<Cars/>}/>
          <Route path='/local_taxi' element={<LocalTaxi/>}/>
          <Route path='/outstation' element={<OutStation/>}/>
          <Route path='/car/luxury' element={<LuxuryCar/>}/>
          <Route path='/taxi/airport' element={<AirportTaxi/>}/>
          <Route path='/employee_transportation' element={<EmployeeTransportation/>}/>
        </Routes>
        {/* <ScrollToTopButton/> */}
        <Footer/>
        </BrowserRouter>
        </>
      )} 
    </div>
  )
}

export default App
