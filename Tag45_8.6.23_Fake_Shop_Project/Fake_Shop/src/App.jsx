//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ProduktDetails from "./pages/Produktdetails";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/produktdetails/:productId" element={<ProduktDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
