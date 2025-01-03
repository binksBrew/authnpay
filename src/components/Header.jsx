// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import loginApp from "../assets/loginapp.png";

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showLoginDropdown, setShowLoginDropdown] = useState(false);

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleLoginDropdown = () => {
//     setShowLoginDropdown((prev) => !prev);
//   };

//   const closeDropdowns = (e) => {
//     if (
//       !e.target.closest(".pricing-dropdown-wrapper") &&
//       !e.target.closest(".login-dropdown-wrapper")
//     ) {
//       setShowPricingDropdown(false);
//       setShowLoginDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", closeDropdowns);
//     return () => {
//       document.removeEventListener("click", closeDropdowns);
//     };
//   }, []);

//   return (
//     <header className="header">
//       <div className="logo">
//         <Link to="/">AuthnPay</Link>
//       </div>
//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/services">Services</Link>
//         <div className="pricing-dropdown-wrapper">
//           <Link
//             to="#"
//             className="pricing-link"
//             onClick={handleTogglePricingDropdown}
//           >
//             Pricing
//           </Link>
//           {showPricingDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <Link
//                   to={`/services/${service.id}`}
//                   key={service.id}
//                   className="dropdown-item"
//                 >
//                   <img src={service.img} alt={service.title} />
//                   <h4>{service.title}</h4>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//         <Link to="/livedemo">Live Demo</Link>
//       </nav>
//       <div className="cta-buttons login-dropdown-wrapper">
//         <button className="login-btn" onClick={handleToggleLoginDropdown}>
//           Login
//         </button>
//         {showLoginDropdown && (
//           <div className="login-dropdown">
//             <div className="login-left">
//               <Link to="/authnpay">
//                 <p className="small-text">Pay with</p>
//                 <p className="big-text">AuthnPay</p>
//               </Link>
//             </div>
//             <div className="login-right">
//               <ul className="platform-icons">
//                 {[
//                   "WordPress",
//                   "Shopify",
//                   "Wix",
//                   "Magento",
//                   "JavaScript",
//                   "React",
//                   "Angular",
//                   "Vue",
//                   "Android",
//                   "iOS",
//                   "Flutter",
//                   "React Native",
//                 ].map((platform) => (
//                   <li key={platform}>
//                     <a href="#" target="_blank" rel="noopener noreferrer">
//                       <img src={loginApp} alt={platform} />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//         <Link to="/signup">
//           <button className="signup-btn">Get Started</button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;














// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import loginApp from "../assets/loginapp.png";

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showLoginDropdown, setShowLoginDropdown] = useState(false);

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleLoginDropdown = () => {
//     setShowLoginDropdown((prev) => !prev);
//   };

//   const closeDropdowns = (e) => {
//     if (
//       !e.target.closest(".pricing-dropdown-wrapper") &&
//       !e.target.closest(".login-dropdown-wrapper")
//     ) {
//       setShowPricingDropdown(false);
//       setShowLoginDropdown(false);
//     }
//   };

//   const handleDropdownItemClick = () => {
//     setShowPricingDropdown(false); // Close the dropdown when an item is clicked
//   };

//   useEffect(() => {
//     document.addEventListener("click", closeDropdowns);
//     return () => {
//       document.removeEventListener("click", closeDropdowns);
//     };
//   }, []);

//   return (
//     <header className="header">
//       <div className="logo">
//         <Link to="/">AuthnPay</Link>
//       </div>
//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/services">Services</Link>
//         <div className="pricing-dropdown-wrapper">
//           <Link
//             to="#"
//             className="pricing-link"
//             onClick={handleTogglePricingDropdown}
//           >
//             Pricing
//           </Link>
//           {showPricingDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <Link
//                   to={`/services/${service.id}`}
//                   key={service.id}
//                   className="dropdown-item"
//                   onClick={handleDropdownItemClick} // Close the dropdown on click
//                 >
//                   <img src={service.img} alt={service.title} />
//                   <h4>{service.title}</h4>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//         <Link to="/livedemo">Live Demo</Link>
//       </nav>
//       <div className="cta-buttons login-dropdown-wrapper">
//         <button className="login-btn" onClick={handleToggleLoginDropdown}>
//           Login
//         </button>
//         {showLoginDropdown && (
//           <div className="login-dropdown">
//             <div className="login-left">
//               <Link to="/authnpay">
//                 <p className="small-text">Pay with</p>
//                 <p className="big-text">AuthnPay</p>
//               </Link>
//             </div>
//             <div className="login-right">
//               <ul className="platform-icons">
//                 {[
//                   "WordPress",
//                   "Shopify",
//                   "Wix",
//                   "Magento",
//                   "JavaScript",
//                   "React",
//                   "Angular",
//                   "Vue",
//                   "Android",
//                   "iOS",
//                   "Flutter",
//                   "React Native",
//                 ].map((platform) => (
//                   <li key={platform}>
//                     <a href="#" target="_blank" rel="noopener noreferrer">
//                       <img src={loginApp} alt={platform} />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//         <Link to="/signup">
//           <button className="signup-btn">Get Started</button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;







import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../styles/LoginDropdown.css";
import servicesData from "./servicesData";
import loginApp from "../assets/loginapp.png";

const Header = () => {
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTogglePricingDropdown = (e) => {
    e.preventDefault();
    setShowPricingDropdown((prev) => !prev);
  };

  const handleToggleLoginDropdown = () => {
    setShowLoginDropdown((prev) => !prev);
  };

  const closeDropdowns = (e) => {
    if (
      !e.target.closest(".pricing-dropdown-wrapper") &&
      !e.target.closest(".login-dropdown-wrapper")
    ) {
      setShowPricingDropdown(false);
      setShowLoginDropdown(false);
    }
  };

  const handleDropdownItemClick = () => {
    setShowPricingDropdown(false); // Close the dropdown when an item is clicked
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
        <Link to="/">AuthnPay</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <a href="#services" onClick={handleScrollToServices}> {/* Updated Link */}
          Services
        </a>
        <div className="pricing-dropdown-wrapper">
          <Link
            to="#"
            className="pricing-link"
            onClick={handleTogglePricingDropdown}
          >
            Pricing
          </Link>
          {showPricingDropdown && (
            <div className="dropdown-content show">
              {servicesData.map((service) => (
                <Link
                  to={`/services/${service.id}`}
                  key={service.id}
                  className="dropdown-item"
                  onClick={handleDropdownItemClick} // Close the dropdown on click
                >
                  <img src={service.img} alt={service.title} />
                  <h4>{service.title}</h4>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/livedemo">Live Demo</Link>
      </nav>
      <div className="cta-buttons login-dropdown-wrapper">
        <button className="login-btn" onClick={handleToggleLoginDropdown}>
          Login
        </button>
        {showLoginDropdown && (
          <div className="login-dropdown">
            <div className="login-left">
              <Link to="/authnpay">
                <p className="small-text">Pay with</p>
                <p className="big-text">AuthnPay</p>
              </Link>
            </div>
            <div className="login-right">
              <ul className="platform-icons">
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
                  <li key={platform}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img src={loginApp} alt={platform} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Link to="/signup">
          <button className="signup-btn">Get Started</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
