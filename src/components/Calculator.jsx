import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = ({ openSignupPopup }) => {
  const [core, setCore] = useState(0);
  const [guard, setGuard] = useState(0);
  const [select, setSelect] = useState(0);
  const [faceKey, setFaceKey] = useState(0);
  const [access, setAccess] = useState(0);

  const totalAuths = core + guard + select + faceKey + access;
  const costPerAuth = 0.10; // Example cost per authentication
  const totalCost = totalAuths * costPerAuth;

  return (
    <div className="calculator-container">
      {/* Left Section */}
      <div className="calculator-info">
        <h2>Price Calculator</h2>
        <p>
          Start building your secure authentication system with Core, Guard,
          Select, Face Key, and Access, and customize it to your needs.
        </p>
        <button className="get-started-btn" onClick={openSignupPopup}>
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="calculator-box">
        <div className="country-select">
          <label htmlFor="country">Choose a country</label>
          <select id="country">
            <option value="India">India</option>
            <option value="disabled" disabled>
        (currently available only in India)
      </option>
          </select>
        </div>

        {/* Sliders */}
        <div className="sliders">
          <div className="slider">
            <label>Core/mo: {core}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={core}
              onChange={(e) => setCore(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Guard/mo: {guard}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={guard}
              onChange={(e) => setGuard(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Select/mo: {select}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={select}
              onChange={(e) => setSelect(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Face Key/mo: {faceKey}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={faceKey}
              onChange={(e) => setFaceKey(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Access/mo: {access}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={access}
              onChange={(e) => setAccess(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="summary">
          <div>
            <span>Total Auths/mo </span>
            <span>{totalAuths}</span>
          </div>
          <div>
            <span>Per Auth/mo </span>
            <span>~₹{costPerAuth.toFixed(2)}</span>
          </div>
          <div>
            <span>Total Cost</span>
            <span>₹{totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
