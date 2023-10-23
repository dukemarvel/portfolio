import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';  // Ensure correct path
import AIInnovations from './components/AIInnovations';  // Ensure correct path
import Contact from './components/Contact';  // Ensure correct path
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
            {/* ... other routes ... */}
          </Routes>
      
    </div>
  );
}

export default App;
