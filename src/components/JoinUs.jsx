// import React from 'react';
// import '../styles/JoinUs.css';
// import rocketImage from '../assets/rocket2.png';

// const JoinUs = () => {
//   return (
//     <section className="join-us">
//       <div className="join-us-content">
//         <h2>Join With Us Today & Increase Your Productivity</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
//           Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
//         </p>
//         <button className="sign-up-btn">Sign up free →</button>
//       </div>
//       <div className="join-us-image">
//         <img src={rocketImage} alt="Rocket" />
//       </div>
//     </section>
//   );
// };

// export default JoinUs;








import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../styles/JoinUs.css";
import rocketImage from "../assets/rocket2.png";

const JoinUs = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <section className="join-us">
      <div className="join-us-content">
        <h2>Join With Us Today & Increase Your Productivity</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
        <button className="sign-up-btn" onClick={handleSignUp}>
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
