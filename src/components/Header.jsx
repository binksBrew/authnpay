// import React, { useState, useEffect } from "react";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import userIcon from "../assets/user.png";
// import logo from "../assets/auth-logo.png";
// import img1 from "../assets/platforms/workspace/gmail.png";
// import img2 from "../assets/platforms/workspace/meet.png";
// import img3 from "../assets/platforms/workspace/teams.png";
// import img4 from "../assets/platforms/ecommerce/amazon.png";
// import img5 from "../assets/platforms/socialmedia/instagram.png";
// import img6 from "../assets/platforms/socialmedia/facebook.png";
// import img7 from "../assets/platforms/banks/yesbank.png";
// import img8 from "../assets/platforms/banks/sbi.png";
// import img9 from "../assets/platforms/banks/icici.png";

// const Header = ({ openSignupPopup }) => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//     setShowServicesDropdown(false);
//     setShowUserDropdown(false);
//   };

//   const handleToggleServicesDropdown = (e) => {
//     e.preventDefault();
//     setShowServicesDropdown((prev) => !prev);
//     setShowPricingDropdown(false);
//     setShowUserDropdown(false);
//   };

//   const handleToggleUserDropdown = () => {
//     setShowUserDropdown((prev) => !prev);
//     setShowPricingDropdown(false);
//     setShowServicesDropdown(false);
//   };

//   const closeDropdowns = (e) => {
//     if (
//       !e.target.closest(".pricing-dropdown-wrapper") &&
//       !e.target.closest(".services-dropdown-wrapper") &&
//       !e.target.closest(".user-dropdown-wrapper")
//     ) {
//       setShowPricingDropdown(false);
//       setShowServicesDropdown(false);
//       setShowUserDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", closeDropdowns);
//     return () => {
//       document.removeEventListener("click", closeDropdowns);
//     };
//   }, []);

//   const platformImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
//   const platformNames = [
//     "WordPress",
//     "Shopify",
//     "Wix",
//     "Magento",
//     "JavaScript",
//     "React",
//     "Angular",
//     "Vue",
//     "Android",
//   ];

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="/">
//           <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
//           <span>AuthnPay</span>
//         </a>
//       </div>
//       <nav className="nav-links">
//         <a href="/">Home</a>
//         <div className="services-dropdown-wrapper">
//           <a
//             href="#"
//             className="services-link"
//             onClick={handleToggleServicesDropdown}
//           >
//             Services
//           </a>
//           {showServicesDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <a
//                   href={`/services/${service.id}`} // Navigate to ServiceDetail page
//                   key={service.id}
//                   className="dropdown-item"
//                 >
//                   <img src={service.img} alt={service.title} />
//                   <h4>{service.title}</h4>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="pricing-dropdown-wrapper">
//           <a
//             href="#"
//             className="pricing-link"
//             onClick={handleTogglePricingDropdown}
//           >
//             Pricing
//           </a>
//           {showPricingDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <a
//                   href={`/services/${service.id}/pricing`} // Updated to point to pricing page
//                   key={service.id}
//                   className="dropdown-item"
//                 >
//                   <img src={service.img} alt={service.title} />
//                   <h4>{service.title}</h4>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//         <a href="/usai">USAI</a>
//         <a href="/livedemo">Live Demo</a>
//       </nav>
//       <div className="cta-buttons">
//         {/* Trusted Devices Button */}
//         <a href="/comingsoon">
//           <button className="trusted-device-btn">USAI Web Shield</button>
//         </a>

//         {/* Get Started Button triggers SignupPopup */}
//         <button className="signup-btn" onClick={openSignupPopup}>
//           Get Started
//         </button>

//         {/* User Icon with Dropdown */}
//         <div
//           className="user-dropdown-wrapper"
//           onClick={handleToggleUserDropdown}
//         >
//           <img src={userIcon} alt="User Icon" className="user-icon" />
//         </div>
//         {showUserDropdown && (
//           <div className="login-dropdown">
//             <a href="/comingsoon" className="login-left">
//               <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
//               <p className="big-text">AuthnPay</p>
//               <p className="small-text">Dashboard Login</p>
//             </a>
//             <a href="/loginplatform" className="login-right">
//               <div className="platform-icons">
//                 {platformImages.map((image, index) => (
//                   <img key={platformNames[index]} src={image} alt={platformNames[index]} />
//                 ))}
//               </div>
//               <p className="small-text">Platform Login</p>
//             </a>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;















// with hamburger

import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import "../styles/LoginDropdown.css";
import servicesData from "./servicesData";
import userIcon from "../assets/user.png";
import logo from "../assets/auth-logo.png";
import img1 from "../assets/platforms/workspace/gmail.png";
import img2 from "../assets/platforms/workspace/meet.png";
import img3 from "../assets/platforms/workspace/teams.png";
import img4 from "../assets/platforms/ecommerce/amazon.png";
import img5 from "../assets/platforms/socialmedia/instagram.png";
import img6 from "../assets/platforms/socialmedia/facebook.png";
import img7 from "../assets/platforms/banks/yesbank.png";
import img8 from "../assets/platforms/banks/sbi.png";
import img9 from "../assets/platforms/banks/icici.png";

const Header = ({ openSignupPopup }) => {
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTogglePricingDropdown = (e) => {
    e.preventDefault();
    setShowPricingDropdown((prev) => !prev);
    setShowServicesDropdown(false);
    setShowUserDropdown(false);
  };

  const handleToggleServicesDropdown = (e) => {
    e.preventDefault();
    setShowServicesDropdown((prev) => !prev);
    setShowPricingDropdown(false);
    setShowUserDropdown(false);
  };

  const handleToggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
    setShowPricingDropdown(false);
    setShowServicesDropdown(false);
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

  const platformImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const platformNames = [
    "WordPress",
    "Shopify",
    "Wix",
    "Magento",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "Android",
  ];

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
          <span>AuthnPay</span>
        </a>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
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
        <a href="/comingsoon">
          <button className="trusted-device-btn">USAI Web Shield</button>
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
            <a href="/comingsoon" className="login-left">
              <img src={logo} alt="AuthnPay Logo" className="auth-logo" />
              <p className="big-text">AuthnPay</p>
              <p className="small-text">Dashboard Login</p>
            </a>
            <a href="/loginplatform" className="login-right">
              <div className="platform-icons">
                {platformImages.map((image, index) => (
                  <img
                    key={platformNames[index]}
                    src={image}
                    alt={platformNames[index]}
                  />
                ))}
              </div>
              <p className="small-text">Platform Login</p>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
