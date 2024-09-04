import React from 'react';
import Section from '../Section'
import Footer from '../Footer'
import '../../App.css'
import HomeMiddleSection from '../MiddleSection/HomeMiddleSection';

function Home() {
    return(
        <>
            <Section/>
            <HomeMiddleSection/>
            <Footer/>
        </>
    )
}

export default Home;