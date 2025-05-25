import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">DentaCare</div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuActive}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="mobile-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="mobile-appointment">
            <button className="cta-button" onClick={handleAppointmentClick}>📞 Book Appointment</button>
          </li>
        </ul>
        <button className="cta-button desktop-appointment" onClick={handleAppointmentClick}>📞 Book Appointment</button>
      </nav>
    </header>
  );
};

export default Header;
