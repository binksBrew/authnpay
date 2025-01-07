import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Compliance.css";
import tempImage from "../assets/compliance.png";

const Compliance = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMoreClick = () => {
    navigate("/security-compliance"); // Navigate to the SecurityCompliance page
  };

  return (
    <section className="compliance-section">
      <h2>COMPLIANCE & DATA SAFEGUARDING</h2>
      <h3>Top-Tier Uncompromising Compliance Excellence</h3>
      <p>
      Data security is at the heart of everything we do. We’ve sought
independent certification to assure you that our systems and
your data are fully secure.
      </p>
      <div className="certifications">
        <img src={tempImage} alt="GDPR" />
        <img src={tempImage} alt="CERTM" />
        <img src={tempImage} alt="ISO 27001" />
        <img src={tempImage} alt="AICPA SOC" />
      </div>
      <button className="learn-more-btn" onClick={handleLearnMoreClick}>
        Learn More
      </button>
    </section>
  );
};

export default Compliance;
