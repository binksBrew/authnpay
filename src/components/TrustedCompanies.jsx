import React from "react";
import "../styles/TrustedCompanies.css";
import trusted from "../assets/trusted.png"; // Import the trusted companies logo image

const TrustedCompanies = () => {
  return (
    <section className="trusted-section">
      <h2 className="trusted-heading">TRUSTED BY 5000+ COMPANIES WORLD WIDE</h2>
      <div className="trusted-logos-container">
  <div className="trusted-logos">
    <img src={trusted} alt="Trusted Company 1" className="trusted-image" />
    <img src={trusted} alt="Trusted Company 2" className="trusted-image" />
    <img src={trusted} alt="Trusted Company 3" className="trusted-image" />
    {/* Repeat the same logos for looping */}
    <img src={trusted} alt="Trusted Company 1" className="trusted-image" />
    <img src={trusted} alt="Trusted Company 2" className="trusted-image" />
    <img src={trusted} alt="Trusted Company 3" className="trusted-image" />
  </div>
</div>

    </section>
  );
};

export default TrustedCompanies;
