import React from "react";
import "../styles/Support.css";
import supportImage from "../assets/support.jpg"; // Make sure to place the image in the assets folder

const Support = () => {
  return (
    <div className="support-section">
      <div
        className="support-header"
        style={{ backgroundImage: `url(${supportImage})` }}
      >
        <h1>Welcome!</h1>
        <h2>How can we help today?</h2>
      </div>
      <div className="support-cards">
        <div className="support-card">
          <div className="support-icon">
            <img
              src="https://img.icons8.com/color/96/whatsapp--v1.png"
              alt="WhatsApp Support"
            />
          </div>
          <h3>24/7 WhatsApp Support</h3>
          <p>
            Reach out to us on WhatsApp for immediate assistance. Our dedicated
            agents are available 24/7 to address your queries and provide the
            support you need, right at your fingertips.
          </p>
          <button className="support-btn">Chat Now</button>
        </div>
        <div className="support-card">
          <div className="support-icon">
            <img
              src="https://img.icons8.com/color/96/nerd.png"
              alt="Product Expert"
            />
          </div>
          <h3>Consult with a Product Expert</h3>
          <p>
            Schedule a call with a product expert to dive deeper into our
            offerings. Get personalized advice and insights to make the most
            out of our products tailored to your project's requirements.
          </p>
          <button className="support-btn">Schedule Now</button>
        </div>
        <div className="support-card">
          <div className="support-icon">
            <img
              src="https://img.icons8.com/color/96/electrical.png"
              alt="Integration Expertise"
            />
          </div>
          <h3>Integration Expertise on Call</h3>
          <p>
            Arrange a call with an integration expert to ensure a smooth setup.
            Our specialists are here to guide you through the integration
            process, troubleshooting any challenges you may encounter along the
            way.
          </p>
          <button className="support-btn">Schedule Now</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
