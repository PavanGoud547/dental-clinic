import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send Message');
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('Sending...');
    setIsDisabled(true);

    try {
      // Simulate sending form data with Axios (mock)
      await axios.post('/api/contact', formData);
      setFormStatus('Message Sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setFormStatus('Send Message');
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Get In Touch</h2>
          <p>Ready to start your journey to better oral health? Contact us today to schedule your appointment.</p>
        </div>
        <div className="contact-content">
          <div className="contact-form fade-in-up">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <p style={{color: 'red'}}>{errors.subject}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <p style={{color: 'red'}}>{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', background: formStatus === 'Message Sent!' ? '#48bb78' : '' }}
                disabled={isDisabled}
              >
                {formStatus}
              </button>
            </form>
          </div>
          <div className="contact-info fade-in-up">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@dentacare.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Smile Street<br />Health City, HC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-3PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-container fade-in-up" style={{ marginTop: '2rem' }}>
          <iframe
            title="Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019927927927!2d-122.419415484681!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b6f1b1b%3A0x4a1a1a1a1a1a1a1a!2sDental%20Clinic!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
