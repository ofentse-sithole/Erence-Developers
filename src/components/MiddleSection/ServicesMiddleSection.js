import React from 'react'
import './ServiceMiddle.css'
import './HomeMiddle.css'

function ServicesMiddleSection() {
  return (
    <div className="service-page">
      {/* Services Section */}
      <div className= "about-us">
      <h3>Our Services</h3>
      <p>
        At Erence Developers, we provide top-tier web and mobile development services. Our goal is to
        help businesses harness the power of technology, offering innovative and scalable solutions that
        are tailored to your needs. Whether you're a startup or an established business, we are here to
        support your digital transformation journey.
      </p>

      <br />
      <br />
      <br />
      <br />
      {/* Web Development Section */}
      <h3 id="web-development" >Web Development</h3>
      <p>
          Our web development services are designed to create powerful, scalable, and secure websites 
          tailored to your needs. We deliver high-performance sites, whether you're looking for an 
          eCommerce platform, corporate website, or dynamic web app. Our focus is on ensuring your online 
          presence is fast, mobile-friendly, and optimized for search engines.
      </p>

      <br />
      <br />
      <br />
      <br />
      {/* Mobile Development Section */}
      <h3 id="mobile-development">Mobile Development</h3>
      <p>
        With mobile usage continuing to rise, we provide solutions that work seamlessly across all platforms.
        Our mobile apps are designed with user experience in mind, ensuring that your customers have an engaging
        and intuitive experience on both iOS and Android. Stay tuned for our upcoming mobile app development services.
      </p>

      <br />
      <br />
      <br />
      <br />
      {/* Custom Development Section */}
      <h3 id="custom-development" >Custom Development</h3>
      <p>
        Every business is unique, and so are its software needs. At Erence Developers, we offer custom software
        solutions that are crafted specifically for your business. Whether you're looking to automate internal
        processes or create a bespoke system to streamline operations, our team can develop a solution that
        drives efficiency and growth. From custom CRM solutions to advanced system integrations, we bring your
        vision to life with tailor-made software.
      </p>


      <br />
      <br />
      <br />
      <br />
      {/* Website Hosting Section */}
      <h3 id="web-hosting">Website Hosting</h3>
      <p>
        Our website hosting services ensure that your website is always up and running, with minimal downtime.
        We provide secure and scalable hosting solutions that are tailored to your business needs. Whether you're
        launching a small site or managing a large online store, our hosting packages offer the speed, security,
        and reliability required for an excellent user experience.
      </p>
      </div>
    </div>
  )
}

export default ServicesMiddleSection
