import React from 'react';
import './HomeMiddle.css';

function HomeMiddleSection() {
    return (
        <div className='color'>
        <div className="home-page" >
            {/* Hero Section */}
            <section className="hero">
                <h1>Transforming Ideas into Digital Experiences</h1>
                <p>Your partner in innovative website development. Mobile solutions coming soon.</p>
                <button className="cta-button">Get Started</button>
            </section>

            {/* About Us Section */}
            <section id="about" className="about-us">
                <h2>About Us</h2>
                <p>
                    Erence Developers is dedicated to delivering high-quality website development services. Our team of experts is passionate about creating stunning websites that meet your needs. Mobile development services are coming soon—stay tuned!
                </p>
            </section>

            {/* Updated Services Section */}
            <section id="about" className="about-us">
                <h2>Our Services</h2>
                <p>
                    We provide exceptional web development services to create responsive, user-friendly, and visually appealing websites.
                </p>

                <br/>

                <h3>Coming Soon: Mobile Development</h3>
                <p>
                    Stay tuned for our new mobile development services, designed to bring your ideas to life on any device.
                </p>
                
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio">
                <h2>Our Portfolio</h2>
                <p>
                    Take a look at some of our past projects and see how we have helped our clients achieve their digital goals.
                </p>
                {/* Portfolio items can be added here */}
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <p>
                    "Erence Developers transformed our vision into a beautiful website. Highly recommended!"
                </p>
                {/* More testimonials can be added here */}
            </section>
        </div>
        </div>
    );
}
export default HomeMiddleSection;