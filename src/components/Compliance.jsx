import React from "react";
import "../styles/Compliance.css";
import tempImage from "../assets/compliance.png";

const Compliance = () => {
  return (
    <section className="compliance-section">
      <h2>COMPLIANCE & DATA SECURITY</h2>
      <h3>The highest levels of compliance</h3>
      <p>
        We take data security incredibly seriously. We want you to trust us
        and our systems, which is why we’ve sought external certification to
        ensure our technology infrastructure and your data is kept secure.
      </p>
      <div className="certifications">
        <img src={tempImage} alt="GDPR" />
        <img src={tempImage} alt="CERTM" />
        <img src={tempImage} alt="ISO 27001" />
        <img src={tempImage} alt="AICPA SOC" />
      </div>
    </section>
  );
};

export default Compliance;
