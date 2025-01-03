import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroWithVideo.css';
import tempVideo from '../assets/herovideo.mp4'; // Placeholder video file

const HeroWithVideo = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGetStarted = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <section className="hero-with-video">
      <video autoPlay loop muted className="background-video">
        <source src={tempVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <p className="tagline">ALL-IN-ONE</p>
        <h1>Smart Authentication Suite<br />for your App/Website</h1>
        <p className="description">
          Sign in customers with WhatsApp, SMS, Email, and more with 98% conversion.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroWithVideo;
