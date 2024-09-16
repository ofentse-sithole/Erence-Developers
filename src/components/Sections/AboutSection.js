import React, {useEffect} from 'react'
import '../Section.css'

function AboutSection() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
        <div className='section-container'>
            <video src="/videos/metaverse.mp4" autoPlay loop muted />
            <h1> About Us</h1>
            <p>Get to know us a little better!</p>
            <br />
            
        </div>
    )
}

export default AboutSection
