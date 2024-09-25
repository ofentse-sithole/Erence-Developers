import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Make sure to create and import a CSS file
import { faFacebook, faInstagramSquare, faLinkedinIn, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-column">
                    <h4>Home</h4>
                    <ul>
                        <li><a href="/home#about">About</a></li>
                        <li><a href="/home#service">Service</a></li>
                        <li><a href="/home#project">Projects</a></li>
                        <li><a href="/home#clients">Our Clients</a></li>
                        <li><a href="/home#testimonial">Testimonials</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/services#web-development">Web Development</a></li>
                        <li><a href="/services#mobile-development">Mobile Development</a></li>
                        <li><a href="/services#custom-development">Custom Development</a></li>
                        <li><a href="/services#web-hosting">Website Hosting</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="/about#about-us">About Us</a></li>
                        <li><a href="/about#about-mission">Our Mission</a></li>
                        <li><a href="/about#about-values">Our Values</a></li>
                        <li><a href="/about#about-choose-us">Why choose us?</a></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="/contact#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/erence_developers/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                        <li><a href="https://web.facebook.com/profile.php?id=61565941095239" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        {/*<li><a href="https://www.linkedin.com/company/erence-developers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>*/}
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Erence Developers. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
