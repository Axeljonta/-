import { useState } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'


import Home from "./pages/Home/Home.jsx";
import Modelos from "./pages/Modelos/Modelos.jsx";
import Sucursales from "./pages/Sucursales/Sucursales.jsx";
import FAQs from "./pages/FAQs/FAQs.jsx";

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Modelos" element={<Modelos />} />
            <Route path="/Sucursales" element={<Sucursales />} />
            <Route path="/FAQs" element={<FAQs />} />
        </Routes> 
      </main>
    </BrowserRouter>
    
  )
}

export default App
