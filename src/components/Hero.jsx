import React from 'react';
import dcImage from '../assets/dc.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <h1>Your Perfect Smile Starts Here</h1>
          <p>Experience exceptional dental care with our state-of-the-art technology and compassionate team. We're committed to making your dental health our priority.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Consultation</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image floating">
          <img
            src={dcImage}
            alt="Modern Dental Office"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
