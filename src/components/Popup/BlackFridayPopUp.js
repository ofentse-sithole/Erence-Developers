import React, { useEffect, useState } from 'react';
import './BlackFridayPopUp.css';

function BlackFridayPopUp({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <img
                    src={process.env.PUBLIC_URL + '/images/BlackFriday.png'}
                    alt="Black Friday Sale"
                    className="popup-image"
                />
            </div>
        </div>
    );
}

export default BlackFridayPopUp;