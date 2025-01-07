import React from "react";
import "../styles/JoinUs.css";
import rocketImage from "../assets/rocket2.png";

const JoinUs = ({ openSignupPopup }) => {
  return (
    <section className="join-us">
      <div className="join-us-content">
        <h2>Join With Us Today & Increase Your Productivity</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
        <button className="sign-up-btn" onClick={openSignupPopup}>
          Sign up free →
        </button>
      </div>
      <div className="join-us-image">
        <img src={rocketImage} alt="Rocket" />
      </div>
    </section>
  );
};

export default JoinUs;
