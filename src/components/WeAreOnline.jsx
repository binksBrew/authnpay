// import React from 'react';
// import '../styles/WeAreOnline.css';
// import tempImage from '../assets/compliance.png';
// import onlineImage from '../assets/online.png';

// const WeAreOnline = () => {
//   return (
//     <section className="we-are-online">
//       <div className="compliance-section">
//         <h2>COMPLIANCE & DATA SECURITY</h2>
//         <h3>The highest levels of compliance</h3>
//         <p>
//           We take data security incredibly seriously. We want you to trust us and our systems,
//           which is why we’ve sought external certification to ensure our technology
//           infrastructure and your data is kept secure.
//         </p>
//         <div className="certifications">
//           <img src={tempImage} alt="GDPR" />
//           <img src={tempImage} alt="CERTM" />
//           <img src={tempImage} alt="ISO 27001" />
//           <img src={tempImage} alt="AICPA SOC" />
//         </div>
//       </div>
//       <div className="online-section">
//         <img className="icon" src={onlineImage} alt="Online Icon" />
//         <h3>We are online</h3>
//         <p>Connect with us instantly over live call or WhatsApp</p>
//         <div className="buttons">
//           <button className="btn demo-btn">Schedule a Demo</button>
//           <button className="btn whatsapp-btn">WhatsApp</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WeAreOnline;












import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/WeAreOnline.css";
import tempImage from "../assets/compliance.png";
import onlineImage from "../assets/online.png";

const WeAreOnline = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScheduleDemo = () => {
    navigate("/livedemo"); // Navigate to the Live Demo page
  };

  return (
    <section className="we-are-online">
      <div className="compliance-section">
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
      </div>
      <div className="online-section">
        <img className="icon" src={onlineImage} alt="Online Icon" />
        <h3>We are online</h3>
        <p>Connect with us instantly over live call or WhatsApp</p>
        <div className="buttons">
          <button className="btn demo-btn" onClick={handleScheduleDemo}>
            Schedule a Demo
          </button>
          <button className="btn whatsapp-btn">WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default WeAreOnline;
