// SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css';

function SplashScreen({ onLoadComplete }) {
    // Simulate a delay for the splash screen
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadComplete();
        }, 3000); // 3-second delay
        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    return (
        <div className="splash-screen">
            <img src="/images/6-removebg-preview.png" alt="Erence Developers Logo" className="splash-logo" />
        </div>
    );
}

export default SplashScreen;
