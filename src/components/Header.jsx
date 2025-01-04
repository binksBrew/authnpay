// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import loginApp from "../assets/loginapp.png";
// import userIcon from "../assets/user.png"; // Import the user icon

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false); // State for the user icon dropdown

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleUserDropdown = () => {
//     setShowUserDropdown((prev) => !prev);
//   };

//   const closeDropdowns = (e) => {
//     if (
//       !e.target.closest(".pricing-dropdown-wrapper") &&
//       !e.target.closest(".user-dropdown-wrapper")
//     ) {
//       setShowPricingDropdown(false);
//       setShowUserDropdown(false);
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
//         <Link to="/services">Services</Link> {/* Link to the Services page */}
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
//       <div className="cta-buttons">
//         {/* Trusted Devices Button */}
//         <Link to="/trusted-devices">
//           <button className="trusted-device-btn">Trusted Devices</button>
//         </Link>
//         <Link to="/signup">
//           <button className="signup-btn">Get Started</button>
//         </Link>

//         {/* User Icon with Dropdown */}
//         <div
//           className="user-dropdown-wrapper"
//           onClick={handleToggleUserDropdown}
//         >
//           <img src={userIcon} alt="User Icon" className="user-icon" />
//         </div>
//         {showUserDropdown && (
//           <div className="login-dropdown">
//             <Link to="/authnpay" className="login-left">
//               {/* Entire left section clickable */}
//               <p className="small-text">Pay with</p>
//               <p className="big-text">AuthnPay</p>
//             </Link>
//             <Link to="/platforms" className="login-right">
//               {/* Entire right section clickable */}
//               <div className="platform-icons">
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
//                   <img key={platform} src={loginApp} alt={platform} />
//                 ))}
//               </div>
//             </Link>
//           </div>
//         )}
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
// import userIcon from "../assets/user.png"; // Import the user icon

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false); // State for the user icon dropdown

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleUserDropdown = () => {
//     setShowUserDropdown((prev) => !prev);
//   };

//   const closeDropdowns = (e) => {
//     if (
//       !e.target.closest(".pricing-dropdown-wrapper") &&
//       !e.target.closest(".user-dropdown-wrapper")
//     ) {
//       setShowPricingDropdown(false);
//       setShowUserDropdown(false);
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
//         <Link to="/services">Services</Link> {/* Link to the Services page */}
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
//                   to={`/services/${service.id}/pricing`} // Updated to point to pricing page
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
//       <div className="cta-buttons">
//         {/* Trusted Devices Button */}
//         <Link to="/trusted-devices">
//           <button className="trusted-device-btn">Trusted Devices</button>
//         </Link>
//         <Link to="/signup">
//           <button className="signup-btn">Get Started</button>
//         </Link>

//         {/* User Icon with Dropdown */}
//         <div
//           className="user-dropdown-wrapper"
//           onClick={handleToggleUserDropdown}
//         >
//           <img src={userIcon} alt="User Icon" className="user-icon" />
//         </div>
//         {showUserDropdown && (
//           <div className="login-dropdown">
//             <Link to="/authnpay" className="login-left">
//               {/* Entire left section clickable */}
//               <p className="small-text">Pay with</p>
//               <p className="big-text">AuthnPay</p>
//             </Link>
//             <Link to="/platforms" className="login-right">
//               {/* Entire right section clickable */}
//               <div className="platform-icons">
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
//                   <img key={platform} src={loginApp} alt={platform} />
//                 ))}
//               </div>
//             </Link>
//           </div>
//         )}
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
// import userIcon from "../assets/user.png"; // Import the user icon

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false); // State for the user icon dropdown

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleServicesDropdown = (e) => {
//     e.preventDefault();
//     setShowServicesDropdown((prev) => !prev);
//   };

//   const handleToggleUserDropdown = () => {
//     setShowUserDropdown((prev) => !prev);
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

//   return (
//     <header className="header">
//       <div className="logo">
//         <Link to="/">AuthnPay</Link>
//       </div>
//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <div className="services-dropdown-wrapper">
//           <Link
//             to="#"
//             className="services-link"
//             onClick={handleToggleServicesDropdown}
//           >
//             Services
//           </Link>
//           {showServicesDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <Link
//                   to={`/services/${service.id}`} // Navigate to ServiceDetail page
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
//                   to={`/services/${service.id}/pricing`} // Updated to point to pricing page
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
//       <div className="cta-buttons">
//         {/* Trusted Devices Button */}
//         <Link to="/trusted-devices">
//           <button className="trusted-device-btn">Trusted Devices</button>
//         </Link>
//         <Link to="/signup">
//           <button className="signup-btn">Get Started</button>
//         </Link>

//         {/* User Icon with Dropdown */}
//         <div
//           className="user-dropdown-wrapper"
//           onClick={handleToggleUserDropdown}
//         >
//           <img src={userIcon} alt="User Icon" className="user-icon" />
//         </div>
//         {showUserDropdown && (
//           <div className="login-dropdown">
//             <Link to="/authnpay" className="login-left">
//               {/* Entire left section clickable */}
//               <p className="small-text">Pay with</p>
//               <p className="big-text">AuthnPay</p>
//             </Link>
//             <Link to="/platforms" className="login-right">
//               {/* Entire right section clickable */}
//               <div className="platform-icons">
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
//                   <img key={platform} src={loginApp} alt={platform} />
//                 ))}
//               </div>
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;













// import React, { useState, useEffect } from "react";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import loginApp from "../assets/loginapp.png";
// import userIcon from "../assets/user.png"; // Import the user icon
// import SignupPopup from "./SignupPopup"; // Import the SignupPopup component

// const Header = () => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [showSignupPopup, setShowSignupPopup] = useState(false); // State to control the signup popup

//   const handleTogglePricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//   };

//   const handleToggleServicesDropdown = (e) => {
//     e.preventDefault();
//     setShowServicesDropdown((prev) => !prev);
//   };

//   const handleToggleUserDropdown = () => {
//     setShowUserDropdown((prev) => !prev);
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

//   const openSignupPopup = () => {
//     setShowSignupPopup(true); // Opens the signup popup
//   };

//   const closeSignupPopup = () => {
//     setShowSignupPopup(false); // Closes the signup popup
//   };

//   useEffect(() => {
//     document.addEventListener("click", closeDropdowns);
//     return () => {
//       document.removeEventListener("click", closeDropdowns);
//     };
//   }, []);

//   return (
//     <>
//       <header className="header">
//         <div className="logo">
//           <a href="/">AuthnPay</a>
//         </div>
//         <nav className="nav-links">
//           <a href="/">Home</a>
//           <div className="services-dropdown-wrapper">
//             <a
//               href="#"
//               className="services-link"
//               onClick={handleToggleServicesDropdown}
//             >
//               Services
//             </a>
//             {showServicesDropdown && (
//               <div className="dropdown-content show">
//                 {servicesData.map((service) => (
//                   <a
//                     href={`/services/${service.id}`} // Navigate to ServiceDetail page
//                     key={service.id}
//                     className="dropdown-item"
//                   >
//                     <img src={service.img} alt={service.title} />
//                     <h4>{service.title}</h4>
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="pricing-dropdown-wrapper">
//             <a
//               href="#"
//               className="pricing-link"
//               onClick={handleTogglePricingDropdown}
//             >
//               Pricing
//             </a>
//             {showPricingDropdown && (
//               <div className="dropdown-content show">
//                 {servicesData.map((service) => (
//                   <a
//                     href={`/services/${service.id}/pricing`} // Updated to point to pricing page
//                     key={service.id}
//                     className="dropdown-item"
//                   >
//                     <img src={service.img} alt={service.title} />
//                     <h4>{service.title}</h4>
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//           <a href="/livedemo">Live Demo</a>
//         </nav>
//         <div className="cta-buttons">
//           {/* Trusted Devices Button */}
//           <a href="/trusted-devices">
//             <button className="trusted-device-btn">Trusted Devices</button>
//           </a>

//           {/* Get Started Button */}
//           <button className="signup-btn" onClick={openSignupPopup}>
//             Get Started
//           </button>

//           {/* User Icon with Dropdown */}
//           <div
//             className="user-dropdown-wrapper"
//             onClick={handleToggleUserDropdown}
//           >
//             <img src={userIcon} alt="User Icon" className="user-icon" />
//           </div>
//           {showUserDropdown && (
//             <div className="login-dropdown">
//               <a href="/authnpay" className="login-left">
//                 {/* Entire left section clickable */}
//                 <p className="small-text">Pay with</p>
//                 <p className="big-text">AuthnPay</p>
//               </a>
//               <a href="/platforms" className="login-right">
//                 {/* Entire right section clickable */}
//                 <div className="platform-icons">
//                   {[
//                     "WordPress",
//                     "Shopify",
//                     "Wix",
//                     "Magento",
//                     "JavaScript",
//                     "React",
//                     "Angular",
//                     "Vue",
//                     "Android",
//                     "iOS",
//                     "Flutter",
//                     "React Native",
//                   ].map((platform) => (
//                     <img key={platform} src={loginApp} alt={platform} />
//                   ))}
//                 </div>
//               </a>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Signup Popup */}
//       {showSignupPopup && <SignupPopup onClose={closeSignupPopup} />}
//     </>
//   );
// };

// export default Header;













import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import "../styles/LoginDropdown.css";
import servicesData from "./servicesData";
import loginApp from "../assets/loginapp.png";
import userIcon from "../assets/user.png";

const Header = ({ openSignupPopup }) => {
  const [showPricingDropdown, setShowPricingDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleTogglePricingDropdown = (e) => {
    e.preventDefault();
    setShowPricingDropdown((prev) => !prev);
  };

  const handleToggleServicesDropdown = (e) => {
    e.preventDefault();
    setShowServicesDropdown((prev) => !prev);
  };

  const handleToggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
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
        <a href="/">AuthnPay</a>
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
        <a href="/livedemo">Live Demo</a>
      </nav>
      <div className="cta-buttons">
        {/* Trusted Devices Button */}
        <a href="/trusted-devices">
          <button className="trusted-device-btn">Trusted Devices</button>
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


















// import React, { useState, useEffect } from "react";
// import "../styles/Header.css";
// import "../styles/LoginDropdown.css";
// import servicesData from "./servicesData";
// import loginApp from "../assets/loginapp.png";
// import userIcon from "../assets/user.png";

// const Header = ({ openSignupPopup }) => {
//   const [showPricingDropdown, setShowPricingDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);

//   const handleClickPricingDropdown = (e) => {
//     e.preventDefault();
//     setShowPricingDropdown((prev) => !prev);
//     setShowServicesDropdown(false); // Close services dropdown if open
//   };

//   const handleClickServicesDropdown = (e) => {
//     e.preventDefault();
//     setShowServicesDropdown((prev) => !prev);
//     setShowPricingDropdown(false); // Close pricing dropdown if open
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

//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="/">AuthnPay</a>
//       </div>
//       <nav className="nav-links">
//         <a href="/">Home</a>

//         {/* Services Dropdown */}
//         <div
//           className="services-dropdown-wrapper"
//           onClick={handleClickServicesDropdown}
//         >
//           <a href="#" className="services-link">
//             Services
//           </a>
//           {showServicesDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <a
//                   href={`/services/${service.id}`}
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

//         {/* Pricing Dropdown */}
//         <div
//           className="pricing-dropdown-wrapper"
//           onClick={handleClickPricingDropdown}
//         >
//           <a href="#" className="pricing-link">
//             Pricing
//           </a>
//           {showPricingDropdown && (
//             <div className="dropdown-content show">
//               {servicesData.map((service) => (
//                 <a
//                   href={`/services/${service.id}/pricing`}
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

//         <a href="/livedemo">Live Demo</a>
//       </nav>

//       <div className="cta-buttons">
//         <a href="/trusted-devices">
//           <button className="trusted-device-btn">Trusted Devices</button>
//         </a>

//         <button className="signup-btn" onClick={openSignupPopup}>
//           Get Started
//         </button>

//         {/* User Icon Dropdown */}
//         <div
//           className="user-dropdown-wrapper"
//           onClick={() => setShowUserDropdown((prev) => !prev)}
//         >
//           <img src={userIcon} alt="User Icon" className="user-icon" />
//         </div>
//         {showUserDropdown && (
//           <div className="login-dropdown">
//             <a href="/authnpay" className="login-left">
//               <p className="small-text">Pay with</p>
//               <p className="big-text">AuthnPay</p>
//             </a>
//             <a href="/platforms" className="login-right">
//               <div className="platform-icons">
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
//                   <img key={platform} src={loginApp} alt={platform} />
//                 ))}
//               </div>
//             </a>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
