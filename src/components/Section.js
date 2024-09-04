// Section.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Section.css';

function Section() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate('/about'); // Navigate to the About page
  };

  const handleNavigateToContact = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className='section-container'>
      <video src="/videos/digitalworld.mp4" autoPlay loop muted />
      <h1>Erence Developers</h1>
      <p>We craft in digital excellence</p>
      <br />
      <div className="section-btns">
        <button
          className='btns btn--outline btn--large'
          onClick={handleNavigateToAbout}
        >
          Get To Know Us
        </button>

        <button
          className='btns btn--primary btn--large'
          onClick={handleNavigateToContact}
        >
          Contact Us <FontAwesomeIcon icon={faPhone} />
        </button>
      </div>
    </div>
  );
}

export default Section;
