import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join our craft of excellence!
        </p>
        <p className="footer-subscription-text">
            You can subscribe at any time.
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                      <Link to='https://www.instagram.com/erence_developers/?hl=en'><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Erence Developers
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Erence Developers © 2024</small>
                    
                    </div>
                
            </section>
        </div>
    );
}

export default Footer;