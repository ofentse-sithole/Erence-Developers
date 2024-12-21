import React, { useEffect, useState } from 'react';
import './Popup.css';

function NewYear2025({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/public/public_holiday_images/1_Jan_2025.png'}
                    alt="New Year 2025"
                    className="popup-image"
                />
            </div>
        </div>
    );
}

export default NewYear2025;