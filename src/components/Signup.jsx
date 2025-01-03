import React, { useEffect } from 'react';
import '../styles/Signup.css';

const Signup = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is loaded
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h1>AuthnPay - Sign Up</h1>
                <label htmlFor="usai-id">USAI ID</label>
                <input type="text" id="usai-id" name="usai-id" placeholder="Enter your USAI ID" required />

                <label htmlFor="business-registration">Business Registration</label>
                <input
                    type="text"
                    id="business-registration"
                    name="business-registration"
                    placeholder="Enter your Business Registration"
                    required
                />

                <label htmlFor="business-name">Business Name</label>
                <input type="text" id="business-name" name="business-name" placeholder="Enter your Business Name" required />

                <label htmlFor="business-pan">Business PAN (Optional)</label>
                <input type="text" id="business-pan" name="business-pan" placeholder="Enter your Business PAN" />

                <label htmlFor="business-address">Business Address</label>
                <textarea
                    id="business-address"
                    name="business-address"
                    rows="3"
                    placeholder="Enter your Business Address"
                    required
                ></textarea>

                <label htmlFor="website-status">Is your Website/App Live?</label>
                <select id="website-status" name="website-status" required>
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="soon">Will Be Live Soon</option>
                </select>

                <label htmlFor="business-type">Business Type</label>
                <select id="business-type" name="business-type" required>
                    <option value="">Select Business Type</option>
                    <option value="private-ltd">Private Limited Company</option>
                    <option value="public-ltd">Public Limited Company</option>
                    <option value="proprietorship">Proprietorship</option>
                    <option value="partnership-llp">Partnership/LLP</option>
                    <option value="trust-society">Trust/Society</option>
                    <option value="huf">Hindu Undivided Family</option>
                    <option value="unregistered">Unregistered</option>
                </select>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
