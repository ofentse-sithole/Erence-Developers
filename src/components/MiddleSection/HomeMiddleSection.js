import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeMiddle.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function HomeMiddleSection() {
    const [activeSlide, setActiveSlide] = useState(0); // For active slide
    const logos = [
        {
            id: 1,
            name: 'CargoVertex Logistics',
            img: process.env.PUBLIC_URL + '/images/cargovertex_logo.png',
            url: 'https://cargovertex-logistics.vercel.app/',
            testimony: "CargoVertex Logistics"
            
        },
        {
            id: 2,
            name: 'Opel Stop.',
            img: process.env.PUBLIC_URL + '/images/Opel_Logo.png',
            url: 'https://opel-stop.vercel.app/',
            testimony: "Opel Stop"
        },
        {
            id: 3,
            name: 'Tacit Group Supply Co.',
            img: process.env.PUBLIC_URL + '/images/Tacit_Logo.png',
            url: 'https://tacit-group-supply-co-yacx.vercel.app/',
            testimony: "Tacit Group Supply Co."
        }
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % logos.length); // Slide to the next logo
        }, 5000); // 5000ms = 5 seconds
        return () => clearInterval(interval); // Clear interval on unmount
    }, [logos.length]);

    const LeftArrow = () => {
        const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
        return <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>{"<"}</button>;
    };

    const RightArrow = () => {
        const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
        return <button disabled={isLastItemVisible} onClick={() => scrollNext()}>{">"}</button>;
    };

    const LogoItem = ({ src, alt, url, name, testimony }) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <div
                className="logo-item"
                onMouseEnter={() => { setIsHovered(true); }}
                onMouseLeave={() => { setIsHovered(false); }}
            >
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={alt} className="client-logo" />
                </a>
                {isHovered && (
                    <div className="speech-bubble">
                        <p>{testimony}</p>
                    </div>
                )}
            </div>
        );
    };

    const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleGetStartedClick = () => {
        navigate('/contact'); // Navigate to the contact page
    };

    const [projectCount, setProjectCount] = useState(0); // State to manage the running number
    useEffect(() => {
        const totalProjects = 3; // Total number of projects
        let count = 0; // Start count
        const incrementTime = 100; // Time interval for increments (in milliseconds)
        const interval = setInterval(() => {
            count += 1; // Increment count by 1
            if (count > totalProjects) {
                clearInterval(interval); // Stop incrementing when reaching the total
            } else {
                setProjectCount(count); // Update the state to trigger re-render
            }
        }, incrementTime);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='color'>
            <div className="home-page">
                {/* Hero Section */}
                <div className="hero">
                    <h1>Transforming Ideas into Digital Experiences</h1>
                    <p>Your partner in innovative website development. Mobile solutions coming soon.</p>
                    <button className="cta-button" onClick={handleGetStartedClick}>
                        Get Started
                    </button>
                </div>

                {/* About Us Section */}
                <div id="about" className="about-us">
                    <h3>About Us</h3>
                    <p>
                        Erence Developers delivers tailored digital solutions to drive business
                        growth. We specialize in high-performance websites, mobile apps, and custom
                        software. With a focus on integrity and excellence, we provide innovative,
                        on-time solutions that meet your needs in a fast-paced digital world.
                    </p>
                    {/* Video Section */}
                    <br />
                    <div className="video">
                        <iframe
                            width="560"
                            height="315"
                            src="videos/Erence_Developers_Video.mp4" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>

                {/* Updated Services Section */}
                <div id="service" className="about-us">
                    <h3>Our Services</h3>
                    <p>
                        At Erence Developers, we create modern, responsive websites and mobile
                        apps for iOS and Android, tailored to your needs. From custom software
                        solutions to SEO and cloud integration, we help businesses grow with
                        innovative digital solutions.
                    </p>
                </div>

                {/* Portfolio Section */}
                <div className="home-middle-section">
                    <div id="project" className="projects">
                        <h3>Our Projects</h3>
                        <p>Projects Completed Successfully</p>
                        <div className="project-box">
                            <span className="project-count">{projectCount}</span>
                        </div>
                    </div>
                </div>

                <div id="client" className="home-middle-section">
                    {/* Client logo */}
                    <div className="client-logo-section">
                        <h3>Our Clients</h3>
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            {logos.map(({ id, img, name, url, testimony }) => (
                                <LogoItem key={id} src={img} alt={name} url={url} name={name} testimony={testimony} />
                            ))}
                        </ScrollMenu>
                    </div>
                </div>

                {/* Testimonials Section 
                <div id="testimonial" className="testimonials">
                    <h3>What Our Clients Say</h3>
                    <p>
                        "Erence Developers transformed our vision into a beautiful website. Highly recommended!"
                        - Tacit Group Supply Co.
                    </p>
                    <br />
                    <p>
                        "Erence Developers brought our ideas to life with a sleek and professional website. Truly exceptional service!"
                        - Opel Stop
                    </p>
                    {/* More testimonials can be added here */}
            {/*</div>*/}
            </div>
        </div>
    );
}

export default HomeMiddleSection;
