import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Products from "./components/Products/Products"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import YearlyHoroscope from './components/Home/YearlyHoroscope'
import Testimonials from './Footer/Testimonials'
const App = () => {
  return (
    <>
  
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
         <Route path="/horoscope/:id" element={<YearlyHoroscope />} />
      </Routes>
  <Footer/>
    </>
  )
}

export default App