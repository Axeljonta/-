import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'


import Home from "./pages/Home";
import Modelos from "./pages/Modelos";
import Sucursales from "./pages/Sucursales";
import FAQs from "./pages/FAQs";

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <main style={{marginTop:"156px"}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Modelos" element={<Modelos />} />
            <Route path="/Sucursales" element={<Sucursales />} />
            <Route path="/FAQs" element={<FAQs />} />
        </Routes> 
      </main>
    </BrowserRouter>
    
  )
}

export default App
