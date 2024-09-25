import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import './ContactMiddle.css'

function ContactMiddleSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kf0twnb', 'template_57je3xa', form.current, 't1cogETF_-3uCWd8O')
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text); // Debugging: Logs success result
            }, (error) => {
                alert('An error occurred, please try again.');
                console.error('EmailJS Error:', error); // Debugging: Logs error details
            });

        e.target.reset(); // Clear the form after submission
    };

    return (
        <div className="contact-page">
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    We'd love to hear from you! Whether you have a question about our services, need a quote, or just want to chat about your next project, feel free to reach out.
                </p>
                <br/>
                

                {/* Contact Form */}
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="from_name">Name</label>
                        <input type="text" id="from_name" name="from_name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_id">Email</label>
                        <input type="email" id="email_id" name="email_id" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default ContactMiddleSection
