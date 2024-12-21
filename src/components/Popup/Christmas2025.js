import React, { useEffect, useState } from 'react';
import './Popup.css';

function Christmas2025({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/public_holiday_images/25_Dec_2025.png'}
                    alt="Christmas 2025"
                    className="popup-image"
                />
            </div>
        </div>
    );
}

export default Christmas2025;