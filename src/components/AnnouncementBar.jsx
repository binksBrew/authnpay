import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AnnouncementBar.css";

const AnnouncementBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/comingsoon");
  };

  return (
    <div className="announcement-bar">
      <div className="announcement-content" onClick={handleClick}>
        <span className="announcement-icon"></span>
        <span className="announcement-text">
        AuthnPay will be operational soon. Stay tuned.
        </span>
        <span className="announcement-arrow">→</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
