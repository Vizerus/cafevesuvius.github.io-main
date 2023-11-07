import React from 'react';
import owners from '../img/owners.jpg';

function About() {
  return (
    <div className='containerdiv'>
      <div className="about-page">
        <div className="about-wrapper">
        <div>
        <h2>Welcome to Cafe Vesuvius about page!</h2>
        <p>Our cafe is the best lol, u should buy here or we will send an assassin to your home</p>
        <p>this is a text about the owners</p>
        </div>
        </div>
        <div className='image-block'>
          <img src={owners} alt="Cafe Vesuvius owners" className="img"/>
        </div>
      </div>
    </div >
  );
}

export default About;