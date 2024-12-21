import React, { useEffect, useState } from 'react';
import './Popup.css';

function WomensDay2025({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/public_holiday_images/9_August_2025.png'}
                    alt="WomensDay 2025"
                    className="popup-image"
                />
            </div>
        </div>
    );
}

export default WomensDay2025;