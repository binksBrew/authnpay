import React from "react";
import "../styles/HeroWithVideo.css";
import tempVideo from "../assets/herovideo.mp4";
import screenshot from "../assets/screenshot.png";

const HeroWithVideo = ({ openSignupPopup }) => {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="hero-with-video">
        <video autoPlay loop muted className="background-video">
          <source src={tempVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <p className="tagline">ALL-IN-ONE</p>
          <h1>Advance Next-Gen (AI-Powered)<br />Authentication and Payment Suit</h1>
          <p className="description">
          Sign in & Make Payment Without any OTP, PIN, Password, Username or any other Credentials          </p>
          <button className="cta-button" onClick={openSignupPopup}>
            Get Started
          </button>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="screenshot-section">
        <div className="screenshot-container">
          <img src={screenshot} alt="AuthnPay Features" className="screenshot-image" />
        </div>
      </section>
    </>
  );
};

export default HeroWithVideo;
