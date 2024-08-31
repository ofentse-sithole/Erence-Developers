import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { Button } from './Button'
import './Section.css'

function Section() {
    
  return (
    <div className='section-container'>
    <video src="/videos/digitalworld.mp4" autoPlay loop muted/>
    <h1> Erence Developers</h1>
    <p>We craft in digital excellence</p>
    <br/>
      <div className="section-btns">
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
        Get To Know Us
        </Button>

        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
                  Contact Us <FontAwesomeIcon icon={faPhone} />
        </Button>
      </div>
    </div>
  )
}

export default Section
