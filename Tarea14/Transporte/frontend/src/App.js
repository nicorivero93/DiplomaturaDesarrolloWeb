import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/layout/header';
import Nav from './components/layout/nav';
import Footer from './components/layout/footer';

import ContactoPage from './pages/contactopage';
import HomePage from './pages/homepage';
import NosotrosPage from './pages/nosotrospage';
import NovedadesPage from './pages/novedadespage';

function App() {
  return (
    <div className="App">
      <header />
      <BrowserRouter>
              <nav />
              <Routes>
                  <Route path="/" element={<HomePage />} /> 
                  <Route path="nosotros" element={<NosotrosPage />} /> 
                  <Route path="novedades" element={<NovedadesPage />} /> 
                  <Route path="contacto" element={<ContactoPage />} /> 
              </Routes>
      </BrowserRouter>
        
          <Footer />
    </div>
  );
}

export default App;
