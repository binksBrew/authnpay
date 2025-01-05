import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WeAreOnline.css";
import onlineImage from "../assets/online.png";

const WeAreOnline = () => {
  const navigate = useNavigate();

  const handleScheduleDemo = () => {
    navigate("/livedemo");
  };

  return (
    <section className="we-are-online">
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
