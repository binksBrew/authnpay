import React from 'react';
import '../styles/FindUs.css';

const FindUs = () => {
  return (
    <section className="find-us-section">
      <div className="find-us-container">
        {/* Send a Message Form */}
        <div className="form-section">
          <h2>Send a message</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" required />
              <input type="text" placeholder="Phone number" required />
            </div>
            <textarea placeholder="Message" rows="4" required></textarea>
            <div className="form-checkbox">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                By clicking Checkbox, you agree to use our "Form" terms and consent cookie usage in browser.
              </label>
            </div>
            <button type="submit" className="send-message-btn">
              Send Message →
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="details-section">
          <h2>Find us</h2>
          <div className="details">
            <p><strong>Our Location</strong></p>
            <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
            <p><strong>Email Address</strong></p>
            <p>yourmail@domainname.com</p>
            <p><strong>Phone Number</strong></p>
            <p>+009 42334 6343 843</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
