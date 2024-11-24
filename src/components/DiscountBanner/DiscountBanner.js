import React from "react";
import "./DiscountBanner.css";

function DiscountBanner() {
    // Get today's date
    const today = new Date();

    // Define the start and end dates for the banner
    const startDate = new Date("2024-11-24");
    const endDate = new Date("2024-11-30");

    // Check if today's date falls within the range
    const isVisible = today >= startDate && today <= endDate;

    // Render the banner only if the date is within the specified range
    return (
        <>
            {isVisible && (
                <div className="discount-banner">
                    <div className="banner-text">
                        <span>15% off from 25th Nov until 30th Nov🎉</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default DiscountBanner;
