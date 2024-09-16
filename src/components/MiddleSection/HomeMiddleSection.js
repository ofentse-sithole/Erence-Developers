import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeMiddle.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function HomeMiddleSection() {

    const [activeSlide, setActiveSlide] = useState(0); // For active slide
    const logos = [
        { id: 1, name: 'Tacit Group Supply Co.', img: process.env.PUBLIC_URL + '/images/Tacit_Logo.png', url: 'https://tacit-group-supply-co-yacx.vercel.app/'}
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

    const LogoItem = ({ src, alt, url }) => (
        <div className="logo-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className="client-logo" />
            </a>
        </div>
    );


    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleGetStartedClick = () => {
        // Perform any necessary actions before navigation
        navigate('/contact'); // Navigate to the target page
    };


    const [projectCount, setProjectCount] = useState(0); // State to manage the running number

    useEffect(() => {
        const totalProjects = 1; // Total number of projects
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
        <div className="home-page" >
            {/* Hero Section */}
            <section className="hero">
                <h1>Transforming Ideas into Digital Experiences</h1>
                <p>Your partner in innovative website development. Mobile solutions coming soon.</p>
                <button className="cta-button" onClick={handleGetStartedClick}>
                Get Started
            </button>
            </section>

            {/* About Us Section */}
            <section id="about" className="about-us">
                <h2>About Us</h2>
                <p>
                        Erence Developers is a forward-thinking technology company committed to 
                        delivering exceptional digital solutions tailored to your business needs. 
                        With a passionate team of experienced developers, designers, and strategists, 
                        we specialize in creating high-performance websites, mobile applications, and 
                        custom software that drive growth and enhance user engagement. Our mission is 
                        to empower businesses through innovative technology, providing them with the 
                        tools they need to succeed in an increasingly digital world. At Erence Developers, 
                        we value integrity, creativity, and excellence, always striving to exceed client 
                        expectations by delivering projects on time, within budget, and to the highest 
                        quality standards. We believe in fostering strong relationships with our clients, 
                        built on trust and a deep understanding of their unique challenges and objectives.
                         Whether you’re a startup looking to establish an online presence or a large enterprise 
                         seeking complex software solutions, Erence Developers is your trusted partner in 
                         navigating the digital landscape.
                </p>
            </section>

            {/* Updated Services Section */}
            <section id="service" className="about-us">
                <h2>Our Services</h2>
                <p>
                        At Erence Developers, we provide a comprehensive range of services 
                        designed to meet your digital needs. Our web development team creates 
                        modern, responsive, and user-friendly websites that are optimized for 
                        performance across all devices, whether you need an e-commerce platform, 
                        a corporate site, or a custom web solution. We also specialize in mobile 
                        app development for iOS and Android, delivering high-quality, intuitive apps 
                        with seamless user experiences from design to deployment. For businesses with 
                        unique requirements, we offer bespoke software solutions, including custom 
                        applications and systems integrations to enhance operational efficiency and 
                        drive growth. Additionally, our consulting services guide you through digital 
                        transformation, while our SEO and digital marketing strategies help you reach 
                        your target audience and increase conversions. To ensure your business operates 
                        efficiently, we provide cloud integration and management services for scalable, 
                        secure, and cost-effective solutions. At Erence Developers, we’re committed to 
                        helping you achieve your business goals through innovative and tailored 
                        technology solutions.
                </p>
                
            </section>

            {/* Portfolio Section */}
                <div className="home-middle-section">
                    <section id="project" className="projects">
                        <h2>Our Projects</h2>
                        <p>Projects Completed Successfully</p>
                        <div className="project-box">
                            <span className="project-count">{projectCount}</span>
                        </div>
                    </section>
                </div>

                <div id="client" className="home-middle-section">
                    {/* Client logo */}
                    <div  className="client-logo-section">
                        <h2>Our Clients</h2>
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            {logos.map(({ id, img, name, url }) => (
                                <LogoItem key={id} src={img} alt={name} url={url} />
                            ))}
                        </ScrollMenu>
                    </div>
                </div>

            {/* Testimonials Section */}
                <section id="testimonial" className="testimonials">
                <h2>What Our Clients Say</h2>
                <p>
                    "Erence Developers transformed our vision into a beautiful website. Highly recommended!"
                </p>
                {/* More testimonials can be added here */}
            </section>
        </div>
        </div>
    );
}
export default HomeMiddleSection;