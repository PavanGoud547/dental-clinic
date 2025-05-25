import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DentaCare</h3>
            <p>Your trusted partner for exceptional dental care and beautiful smiles.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <a href="#">General Dentistry</a>
            <a href="#">Cosmetic Dentistry</a>
            <a href="#">Orthodontics</a>
            <a href="#">Oral Surgery</a>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📞 (555) 123-4567</p>
            <p>📧 info@dentacare.com</p>
            <p>📍 123 Smile Street<br />Health City, HC 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&amp;copy; 2024 DentaCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
