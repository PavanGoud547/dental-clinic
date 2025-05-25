import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What are your clinic hours?',
      answer: 'We are open Monday to Friday from 8AM to 6PM, and Saturday from 9AM to 3PM.',
    },
    {
      question: 'Do you accept new patients?',
      answer: 'Yes, we are currently accepting new patients. Please contact us to schedule an appointment.',
    },
    {
      question: 'What dental services do you offer?',
      answer: 'We offer general dentistry, cosmetic dentistry, orthodontics, oral surgery, pediatric dentistry, and more.',
    },
    {
      question: 'Do you offer emergency dental services?',
      answer: 'Yes, we provide emergency dental care. Please call us immediately if you have a dental emergency.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                style={{ backgroundColor: 'white', border: 'none', width: '100%', textAlign: 'left', padding: '0.5rem 0', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer' }}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderTop: '1px solid #ccc', marginTop: '0.5rem' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
