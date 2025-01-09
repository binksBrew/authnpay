import React from "react";
import "../styles/ComingSoon.css";
import comingSoonImage from "../assets/comingsoon.png";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-text">
          We’re working on something amazing. Stay tuned!
        </p>
        <div className="email-subscription">
          <input
            type="email"
            placeholder="Enter your email to stay updated"
            className="email-input"
          />
          <button className="notify-button">Notify Me</button>
        </div>
      </div>
      <div className="coming-soon-image">
        <img src={comingSoonImage} alt="Coming Soon" className="image" />
      </div>
    </div>
  );
};

export default ComingSoon;
