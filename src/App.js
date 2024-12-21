import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SplashScreen from './components/SplashScreen';
import Christmas2025 from './components/Popup/Christmas2025';
import FreedomDay2025 from './components/Popup/FreedomDay2025';
import HumanRightsDay2025 from './components/Popup/HumanRights2025';
import ReconciliationDay2025 from './components/Popup/ReconciliationDay2025';
import GoodFriday2025 from './components/Popup/GoodFriday2025';
import WomensDay2025 from './components/Popup/WomensDay2025';
import YouthDay2025 from './components/Popup/YouthDay2025';
import WorkersDay2025 from './components/Popup/WorkersDay2025';
import HeritageDay2025 from './components/Popup/HeritageDay2025';
import NewYear2025 from './components/Popup/NewYear2025';
import DiscountBanner from './components/DiscountBanner/DiscountBanner';

/* Adding this because of react-router-dom */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(2024, 10, 24); // November 25th
    const endDate = new Date(2024, 10, 30);  // November 30th

    if (today >= startDate && today <= endDate) {
      setShowPopup(true);
    }
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      {isLoading ? (
        <SplashScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          {/*showPopup && <Popup onClose={handlePopupClose} */}
          <Navbar />
          <DiscountBanner />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
