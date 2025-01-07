import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import "../styles/LoginDropdown.css";
import servicesData from "./servicesData";
import loginApp from "../assets/loginapp.png";
import userIcon from "../assets/user.png";
import logo from "../assets/auth-logo.png";

const Header = ({ openSignupPopup }) => {
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleTogglePricingDropdown = (e) => {
    e.preventDefault();
    setShowPricingDropdown((prev) => !prev);
    setShowServicesDropdown(false); // Close Services dropdown if Pricing is opened
    setShowUserDropdown(false); // Close User dropdown if Pricing is opened
  };

  const handleToggleServicesDropdown = (e) => {
    e.preventDefault();
    setShowServicesDropdown((prev) => !prev);
    setShowPricingDropdown(false); // Close Pricing dropdown if Services is opened
    setShowUserDropdown(false); // Close User dropdown if Services is opened
  };

  const handleToggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
    setShowPricingDropdown(false); // Close Pricing dropdown if User is opened
    setShowServicesDropdown(false); // Close Services dropdown if User is opened
  };

  const closeDropdowns = (e) => {
    if (
      !e.target.closest(".pricing-dropdown-wrapper") &&
      !e.target.closest(".services-dropdown-wrapper") &&
      !e.target.closest(".user-dropdown-wrapper")
    ) {
      setShowPricingDropdown(false);
      setShowServicesDropdown(false);
      setShowUserDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
          <span>AuthnPay</span>
        </a>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <div className="services-dropdown-wrapper">
          <a
            href="#"
            className="services-link"
            onClick={handleToggleServicesDropdown}
          >
            Services
          </a>
          {showServicesDropdown && (
            <div className="dropdown-content show">
              {servicesData.map((service) => (
                <a
                  href={`/services/${service.id}`} // Navigate to ServiceDetail page
                  key={service.id}
                  className="dropdown-item"
                >
                  <img src={service.img} alt={service.title} />
                  <h4>{service.title}</h4>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="pricing-dropdown-wrapper">
          <a
            href="#"
            className="pricing-link"
            onClick={handleTogglePricingDropdown}
          >
            Pricing
          </a>
          {showPricingDropdown && (
            <div className="dropdown-content show">
              {servicesData.map((service) => (
                <a
                  href={`/services/${service.id}/pricing`} // Updated to point to pricing page
                  key={service.id}
                  className="dropdown-item"
                >
                  <img src={service.img} alt={service.title} />
                  <h4>{service.title}</h4>
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="/usai">USAI</a>
        <a href="/livedemo">Live Demo</a>
      </nav>
      <div className="cta-buttons">
        {/* Trusted Devices Button */}
        <a href="/trusted-devices">
          <button className="trusted-device-btn">USAI WebShield</button>
        </a>

        {/* Get Started Button triggers SignupPopup */}
        <button className="signup-btn" onClick={openSignupPopup}>
          Get Started
        </button>

        {/* User Icon with Dropdown */}
        <div
          className="user-dropdown-wrapper"
          onClick={handleToggleUserDropdown}
        >
          <img src={userIcon} alt="User Icon" className="user-icon" />
        </div>
        {showUserDropdown && (
          <div className="login-dropdown">
            <a href="/authnpay" className="login-left">
              <p className="small-text">Pay with</p>
              {/* <p className="big-text">AuthnPay</p> */}
          <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
              <p className="big-text">AuthnPay</p>

            </a>
            <a href="/platforms" className="login-right">
              <div className="platform-icons">
                {[
                  "WordPress",
                  "Shopify",
                  "Wix",
                  "Magento",
                  "JavaScript",
                  "React",
                  "Angular",
                  "Vue",
                  "Android",
                  "iOS",
                  "Flutter",
                  "React Native",
                ].map((platform) => (
                  <img key={platform} src={loginApp} alt={platform} />
                ))}
              </div>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
