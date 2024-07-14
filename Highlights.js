import React from 'react';

function Highlights() {
  return (
    <section className="highlights">
      <h2>This Week's Specials</h2>
      <div className="highlights-container">
        <div className="highlight">
          <img src="path/to/dish_image.jpg" alt="Dish Name" />
          <h3>Dish Name</h3>
          <p>Dish description goes here.</p>
          <span className="price">$15.99</span>
          <button>Order Online</button>
        </div>
        <div className="highlight">
          <img src="path/to/another_dish_image.jpg" alt="Another Dish Name" />
          <h3>Another Dish Name</h3>
          <p>Another dish description goes here.</p>
          <span className="price">$18.99</span>
          <button>Order Online</button>
        </div>
      </div>
    </section>
  );
}

export default Highlights;