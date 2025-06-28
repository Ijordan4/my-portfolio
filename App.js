import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './componets/Navigation';
import AboutMe from './componets/AboutMe';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Resume from './componets/Resume'; 

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;