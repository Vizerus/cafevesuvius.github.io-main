import React from 'react';

function Home() {
  const openingHours = [
    { day: 'Monday', hours: '9am - 5pm' },
    { day: 'Tuesday', hours: '9am - 5pm' },
    { day: 'Wednesday', hours: '9am - 5pm' },
    { day: 'Thursday', hours: '9am - 5pm' },
    { day: 'Friday', hours: '9am - 5pm' },
    { day: 'Saturday', hours: '11am - 5pm' },
    { day: 'Sunday', hours: 'Closed' },
    
  ];

  return (
    <div className="containerdiv">
      <section id="test123" className="hero">
        <div className="home-content">
        <div className="home-wrapper">
          <h1>Cafe Vesuvius</h1>
          <p>Your Favorite Coffee Spot</p>
          <h2>Welcome to Cafe Vesuvius</h2>
          <p>Your Favorite Coffee Spot</p>
          <h2>See something you like?</h2>
          <p>Come and visit us!</p>
          <h1>Opening Hours</h1>
            <ul className="opening-hours">
              {openingHours.map((item) => (
                <li key={item.day}>
                  {item.day}: <span>{item.hours}</span>
                </li>
              ))}
            </ul>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;