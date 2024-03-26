import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';  
import AIInnovations from './components/AIInnovations'; 
import Contact from './components/Contact';  
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
          <main>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/ai" element={<AIInnovations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          </main>
          <Footer />
    </div>
  );
}

export default App;
