import React from 'react'
import ServiceSection from '../Sections/ServiceSection'
import Footer from '../Footer'
import '../Sections/ServiceSection.css'
import '../../App.css'
import ServicesMiddleSection from '../MiddleSection/ServicesMiddleSection'

function Services() {
  return (
    <div>
      <ServiceSection/>
      <ServicesMiddleSection/>
      <Footer/>
    </div>
  )
}

export default Services
