import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { send } from 'emailjs-com'; // Import the send function from emailjs
import { Button } from '../Button';
import emailjs from '@emailjs/browser'

function ContactMidSection() 
{
    const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_kf0twnb', 'template_fyc3xv7', e.target, 't1cogETF_-3uCWd8O')
    }

    return (
        <div className="App">
            <h1 className="page__title">Contact Us</h1>
            <form className="contact__form" onSubmit={sendEmail}>
                <label htmlFor="emailFrom">Email:</label>
                <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" className="message__box"></textarea>
                <Button variant="contained" className="submit__btn" style={{ marginTop: "5px" }}>
                    Send
                </Button>
            </form>
        </div>
    );
}

export default ContactMidSection;
