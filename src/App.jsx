import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactUs from './pages/ContactUs.jsx';
import FAQ from './components/FAQ.jsx';
import Appointment from './pages/Appointment.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: '50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
