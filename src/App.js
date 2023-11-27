import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';  
import AIInnovations from './components/AIInnovations'; 
import Contact from './components/Contact';  
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    
        <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/ai" element={<AIInnovations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
