import React, { useState } from 'react';

const servicesData = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    shortDesc: 'Complete oral health care including cleanings, fillings, and preventive treatments for the whole family.',
    details: 'We provide comprehensive general dentistry services including routine check-ups, cleanings, cavity fillings, and preventive care to maintain your oral health.',
  },
  {
    icon: '✨',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Transform your smile with veneers, whitening, and aesthetic treatments designed to boost your confidence.',
    details: 'Our cosmetic dentistry services include teeth whitening, veneers, bonding, and smile makeovers to enhance the appearance of your teeth.',
  },
  {
    icon: '🔧',
    title: 'Restorative Dentistry',
    shortDesc: 'Restore damaged teeth with crowns, bridges, and implants using advanced materials and techniques.',
    details: 'We offer restorative treatments such as crowns, bridges, dental implants, and fillings to repair and restore damaged or missing teeth.',
  },
  {
    icon: '🦴',
    title: 'Orthodontics',
    shortDesc: 'Straighten your teeth with traditional braces or modern clear aligners for a perfect smile.',
    details: 'Our orthodontic services include traditional braces and Invisalign clear aligners to correct misaligned teeth and improve bite function.',
  },
  {
    icon: '🩺',
    title: 'Oral Surgery',
    shortDesc: 'Expert surgical procedures including extractions, implants, and wisdom teeth removal.',
    details: 'We perform oral surgeries such as tooth extractions, wisdom teeth removal, and dental implant placement with expert care.',
  },
  {
    icon: '👶',
    title: 'Pediatric Dentistry',
    shortDesc: 'Specialized care for children in a friendly, comfortable environment that makes dental visits fun.',
    details: 'Our pediatric dentistry services focus on the unique dental needs of children, providing gentle care and education to promote healthy habits.',
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services" id="services" aria-label="Our Services">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Our Services</h2>
          <p>Comprehensive dental care tailored to your needs with the latest technology and techniques</p>
        </div>
        <div className="services-grid" role="list">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card fade-in-up" role="listitem">
              <div className="service-icon">{service.icon}</div>
              <h3 id={`service-title-${index}`}>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <button
                className="expand-button"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`service-details-${index}`}
                style={{ color: expandedIndex === index ? '' : 'white' }}
              >
                {expandedIndex === index ? 'Hide Details' : 'Show Details'}
              </button>
              {expandedIndex === index && (
                <div
                  id={`service-details-${index}`}
                  className="service-details"
                  role="region"
                  aria-labelledby={`service-title-${index}`}
                >
                  <p>{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
