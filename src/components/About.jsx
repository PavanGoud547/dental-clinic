import React from 'react';
import drSarahImage from '../assets/Dr. Sarah Johnson.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-up">
            <h2>About DentaCare</h2>
            <p>With over 15 years of experience, DentaCare has been providing exceptional dental care to our community. Our state-of-the-art facility combines cutting-edge technology with compassionate care.</p>
            <p>Led by Dr. Sarah Johnson, our team of experienced professionals is committed to helping you achieve optimal oral health in a comfortable, welcoming environment.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="about-image floating">
            <img
              src={drSarahImage}
              alt="Dr. Sarah Johnson"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
