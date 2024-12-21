import React, { useEffect, useState } from 'react';
import './Popup.css';

function FreedomDay2025({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/public_holiday_images/27_April_2025.png'}
                    alt="Freedom 2025"
                    className="popup-image"
                />
            </div>
        </div>
    );
}

export default FreedomDay2025;