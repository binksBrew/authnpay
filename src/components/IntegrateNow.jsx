import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IntegrateNow.css";
import icons from "../assets/icons.png"; // Path to icons.png

const IntegrateNow = () => {
  const navigate = useNavigate();

  const handleIntegrateNowClick = () => {
    navigate("/signup"); // Redirect to the signup form
  };

  return (
    <div className="integrate-now-wrapper">
      <div className="integrate-now-container">
        {/* Left Section: Code Snippet */}
        <div className="integrate-now-code">
          <div className="code-header">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <pre className="code-box">
            <code>
              {`<script src="https://authnpay.com/v2/auth.js"></script>`}
              <br />
              {`<script>`}
              <br />
              {`function authnpay(authnpayUser) {`}
              <br />
              &nbsp;&nbsp;{`alert(JSON.stringify(authnpayUser));`}
              <br />
              {`}`}
              <br />
              {`</script>`}
            </code>
          </pre>
          <button className="documentation-btn">View Documentation</button>
        </div>

        {/* Right Section: Content */}
        <div className="integrate-now-content">
          <h4>BUILT BY DEVELOPERS, FOR DEVELOPERS</h4>
          <h2>Integrate with your app in five minutes</h2>
          <p>
            Our state-of-the-art one-line SDK can be installed over your
            favorite tech with our documentation.
          </p>
          <div className="icons">
            <img src={icons} alt="Technology Icons" />
            <img src={icons} alt="Technology Icons" />
            <img src={icons} alt="Technology Icons" />
            <img src={icons} alt="Technology Icons" />
            <img src={icons} alt="Technology Icons" />

          </div>
          <button className="integrate-btn" onClick={handleIntegrateNowClick}>
            Integrate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrateNow;
