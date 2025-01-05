// import React, { useState } from "react";
// import "../styles/Calculator.css";

// const Calculator = () => {
//   const [whatsApp, setWhatsApp] = useState(0);
//   const [sms, setSms] = useState(0);
//   const [email, setEmail] = useState(0);

//   const totalAuths = whatsApp + sms + email;
//   const costPerAuth = 0.10; // Example cost per authentication
//   const totalCost = totalAuths * costPerAuth;

//   return (
//     <div className="calculator-container">
//       {/* Left Section */}
//       <div className="calculator-info">
//         <h2>Price Calculator</h2>
//         <p>
//           Start building your Sign-in page with WhatsApp, Email, and SMS and
//           convert more users.
//         </p>
//         <button className="get-started-btn">Get Started</button>
//       </div>

//       {/* Right Section */}
//       <div className="calculator-box">
//         <div className="country-select">
//           <label htmlFor="country">Choose a country</label>
//           <select id="country">
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>

//         {/* Sliders */}
//         <div className="sliders">
//           <div className="slider">
//             <label>WhatsApp/mo: {whatsApp}</label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={whatsApp}
//               onChange={(e) => setWhatsApp(Number(e.target.value))}
//             />
//           </div>
//           <div className="slider">
//             <label>SMS/mo: {sms}</label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={sms}
//               onChange={(e) => setSms(Number(e.target.value))}
//             />
//           </div>
//           <div className="slider">
//             <label>Email/mo: {email}</label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={email}
//               onChange={(e) => setEmail(Number(e.target.value))}
//             />
//           </div>
//         </div>

//         {/* Summary */}
//         <div className="summary">
//           <div>
//             <span>Total Auths/mo </span>
//             <span>{totalAuths}</span>
//           </div>
//           <div>
//             <span>Per Auth/mo </span>
//             <span>~₹{costPerAuth.toFixed(2)}</span>
//           </div>
//           <div>
//             <span>Total Cost</span>
//             <span>₹{totalCost.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;












import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = ({ openSignupPopup }) => {
  const [whatsApp, setWhatsApp] = useState(0);
  const [sms, setSms] = useState(0);
  const [email, setEmail] = useState(0);

  const totalAuths = whatsApp + sms + email;
  const costPerAuth = 0.10; // Example cost per authentication
  const totalCost = totalAuths * costPerAuth;

  return (
    <div className="calculator-container">
      {/* Left Section */}
      <div className="calculator-info">
        <h2>Price Calculator</h2>
        <p>
          Start building your Sign-in page with WhatsApp, Email, and SMS and
          convert more users.
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
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        {/* Sliders */}
        <div className="sliders">
          <div className="slider">
            <label>WhatsApp/mo: {whatsApp}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={whatsApp}
              onChange={(e) => setWhatsApp(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>SMS/mo: {sms}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={sms}
              onChange={(e) => setSms(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <label>Email/mo: {email}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={email}
              onChange={(e) => setEmail(Number(e.target.value))}
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
