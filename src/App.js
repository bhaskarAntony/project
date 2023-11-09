import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
