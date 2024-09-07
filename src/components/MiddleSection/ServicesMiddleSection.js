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
                <h3>Mobile Development</h3>
                <p>
                    Stay tuned for our new mobile development services, designed to bring your ideas 
                    to life on any device. Our mobile solutions will be tailored to enhance user 
                    engagement and provide a seamless experience across all platforms.
                </p>
            </section>

          {/* Coming Soon: Mobile Development Section */}
          <section id="custom-development" className="mobile-development">
              <h3>Custom Development</h3>
              <p>
                  We understand that every business has unique requirements. 
                  That's why we offer custom software development solutions 
                  tailored to your specific needs. Our team is skilled in 
                  creating bespoke applications, systems integrations, and 
                  automation tools that enhance your business operations. 
                  Whether you need a custom CRM, inventory management system, 
                  or any other specialized software, we can build a solution that 
                  fits your goals perfectly. Our custom solutions are designed to 
                  improve efficiency, reduce costs, and drive growth.
              </p>
          </section>
        </div>
  )
}

export default ServicesMiddleSection
