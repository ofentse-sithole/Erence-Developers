import React from 'react'
import './ServiceMiddle.css'

function ServicesMiddleSection() {
  return (
    <div className="service-page">
            {/* Services Section */}
            <section className="service-section">
                <h2>Our Services</h2>
                <p>
                    At Erence Developers, we specialize in creating exceptional web development services that 
                    are tailored to meet your unique business needs. Our team is committed to delivering 
                    responsive, user-friendly, and visually appealing websites that provide an outstanding user experience.
                </p>
            </section>

            {/* Web Development Section */}
          <section id="web-development" className="service-section">
                <h3>Web Development</h3>
                <p>
                    Our web development services are designed to transform your ideas into a 
                    digital reality. We build custom websites using the latest technologies 
                    and best practices to ensure they are fast, secure, and optimized for search engines.
                </p>
            </section>

            {/* Coming Soon: Mobile Development Section */}
          <section id="mobile-development" className="mobile-development">
                <h3>Coming Soon: Mobile Development</h3>
                <p>
                    Stay tuned for our new mobile development services, designed to bring your ideas 
                    to life on any device. Our mobile solutions will be tailored to enhance user 
                    engagement and provide a seamless experience across all platforms.
                </p>
            </section>
        </div>
  )
}

export default ServicesMiddleSection
