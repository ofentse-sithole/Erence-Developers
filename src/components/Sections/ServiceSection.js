import React, {useEffect} from 'react'
import './ServiceSection.css'

function ServiceSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className='service-container' background="/public/images/service-background.jpg">

          <h1> Services</h1>
          {/**<p>In need of anything? We happy to assist!</p> */}
          <br />
      </div>

      
  )
}

export default ServiceSection
