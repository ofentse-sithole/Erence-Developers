import React, {useEffect} from 'react';
import '../Section.css';

function ContactSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className='section-container'>
          <video src="/videos/globalization.mp4" autoPlay loop muted />
          <h1> Contact Us</h1>
          <p>In need of anything? We happy to assist!</p>
          <br/>

      </div>
  ) 
}

export default ContactSection
