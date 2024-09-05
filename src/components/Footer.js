import React from 'react'

function Footer() {
  return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Erence Developers. All rights reserved.</p>

                {/* Footer Links */}
                <ul className="footer-links">
                  <li>
                      <a href="#services">Services</a>
                      <ul className="footer-sub-links">
                          <li><a href="#web-development">Web Development</a></li>
                          <li><a href="#mobile-development">Mobile Development</a></li>
                          <li><a href="#custom-solutions">Custom Solutions</a></li>
                      </ul>
                  </li>

                    <li>
                        <a href="#about">About Us</a>
                        <ul className="footer-sub-links">
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#about-values">Our Values</a></li>
                            <li><a href="#about-mission">Our Mission</a></li>
                            <li><a href="#about-choose-us">Why choose us?</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#contact">Contact Us</a></li>
                </ul>

                {/* Social Links */}
                <ul className="social-links">
                    <li><a href="https://www.instagram.com/erence_developers/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/company/erence-developers" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer
