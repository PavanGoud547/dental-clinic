import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.time.trim()) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Appointment Submitted Successfully!</h2>
        <p>Thank you for booking your appointment with us. We will contact you soon.</p>
      </div>
    );
  }

  return (
    <section className="appointment" style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Book an Appointment</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.name && <p style={{color: 'red', marginTop: '0.25rem'}}>{errors.name}</p>}
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.email && <p style={{color: 'red', marginTop: '0.25rem'}}>{errors.email}</p>}
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.phone && <p style={{color: 'red', marginTop: '0.25rem'}}>{errors.phone}</p>}
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.date && <p style={{color: 'red', marginTop: '0.25rem'}}>{errors.date}</p>}
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="time">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.time && <p style={{color: 'red', marginTop: '0.25rem'}}>{errors.time}</p>}
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '5px' }}>
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
