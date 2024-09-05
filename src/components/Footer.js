import React from 'react';
import './Footer.css'; // Make sure to create and import a CSS file

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#about-values">Our Values</a></li>
                        <li><a href="#about-mission">Our Mission</a></li>
                        <li><a href="#about-choose-us">Why choose us?</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#web-development">Web Development</a></li>
                        <li><a href="#mobile-development">Mobile Development</a></li>
                        <li><a href="#custom-solutions">Custom Solutions</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/erence_developers/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/erence-developers" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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
