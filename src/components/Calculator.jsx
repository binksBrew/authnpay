import React, { useState } from "react";
import "../styles/Calculator.css";
import servicesData from "./servicesData";

const Calculator = ({ openSignupPopup }) => {
  const pricingTable = servicesData[0].pricingTable; // Using the first service's pricing table for reference

  // States for the sliders
  const [core, setCore] = useState(0);
  const [guard, setGuard] = useState(0);
  const [select, setSelect] = useState(0);
  const [faceKey, setFaceKey] = useState(0);
  const [access, setAccess] = useState(0);
  const [webShield, setWebShield] = useState(0);

  // Helper function to get price based on range
  const getPrice = (authCount, column) => {
    let price;
    if (authCount <= 500) {
      price = pricingTable[0][column];
    } else if (authCount <= 1500) {
      price = pricingTable[1][column];
    } else if (authCount <= 3500) {
      price = pricingTable[2][column];
    } else {
      price = pricingTable[3][column];
    }

    // Remove non-numeric characters like ₹ and return a valid number
    return parseFloat(price.replace(/[^\d.]/g, ""));
  };

  const totalAuths = core + guard + select + faceKey + access + webShield;

  const totalCost =
    core * getPrice(core, "core") +
    guard * getPrice(guard, "guard") +
    select * getPrice(select, "select") +
    faceKey * getPrice(faceKey, "faceKey") +
    access * getPrice(access, "access") +
    webShield * getPrice(webShield, "webShield");

  const averageCostPerAuth = totalAuths > 0 ? totalCost / totalAuths : 0;

  return (
    <div className="calculator-container">
      {/* Left Section */}
      <div className="calculator-info">
        <h2>Price Calculator</h2>
        <p>
          Start building your secure authentication system with Core, Guard,
          Select, Face Key, Access, and Web Shield. Customize it to your needs.
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
            <p>Price per auth: ₹{getPrice(core, "core")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={core}
              onChange={(e) => setCore(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Guard/mo: {guard}</label>
            <p>Price per auth: ₹{getPrice(guard, "guard")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={guard}
              onChange={(e) => setGuard(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Select/mo: {select}</label>
            <p>Price per auth: ₹{getPrice(select, "select")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={select}
              onChange={(e) => setSelect(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Face Key/mo: {faceKey}</label>
            <p>Price per auth: ₹{getPrice(faceKey, "faceKey")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={faceKey}
              onChange={(e) => setFaceKey(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Access/mo: {access}</label>
            <p>Price per auth: ₹{getPrice(access, "access")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={access}
              onChange={(e) => setAccess(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Web Shield/mo: {webShield}</label>
            <p>Price per auth: ₹{getPrice(webShield, "webShield")}</p>
            <input
              type="range"
              min="0"
              max="10000"
              step="1000"
              value={webShield}
              onChange={(e) => setWebShield(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="summary">
          <div>
            <span>Total Auths/mo: </span>
            <span>₹{totalAuths}</span>
          </div>
          <div>
            <span>Average Cost per Auth: </span>
            <span>₹{averageCostPerAuth.toFixed(2)}</span>
          </div>
          <div>
            <span>Total Cost: </span>
            <span>₹{totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
