import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {/* Repeat the following for each testimonial */}
        <div className="testimonial">
          <p>"This is a great restaurant! The food is delicious and the service is excellent."</p>
          <span>- John Doe</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

