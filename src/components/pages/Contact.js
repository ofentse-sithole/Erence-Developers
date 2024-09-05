import React from 'react'
import ContactSection from '../Sections/ContactSection'
import Footer from '../Footer'
import '../../App.css'
import ContactMiddleSection from '../MiddleSection/ContactMiddleSection'

function Contact() {
  return (
    <div>
      <ContactSection/>
      <ContactMiddleSection/>
      <Footer/>
    </div>
  )
}

export default Contact
