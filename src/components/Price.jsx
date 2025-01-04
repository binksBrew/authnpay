// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Price.css";

// const Price = () => {
//     const navigate = useNavigate(); // Hook for navigation
//     const [whatsAppValue, setWhatsAppValue] = useState(0);
//     const [smsValue, setSmsValue] = useState(0);
//     const [emailValue, setEmailValue] = useState(0);

//     useEffect(() => {
//         // Scroll to the top when the component mounts
//         window.scrollTo(0, 0);
//     }, []);

//     const totalAuths = whatsAppValue + smsValue + emailValue;
//     const costPerAuth =
//         totalAuths <= 500 ? 0.31 : totalAuths <= 1500 ? 0.28 : totalAuths <= 3500 ? 0.24 : 0.20;
//     const totalCost = totalAuths * costPerAuth;

//     const handleGetStarted = () => {
//         navigate("/signup"); // Redirect to the signup page
//     };

//     const handleContactSales = () => {
//         alert("Contact sales functionality coming soon!"); // Placeholder for contact sales action
//     };

//     return (
//         <div>
//             {/* Pricing Header Section */}
//             <div className="pricing-header">
//                 <h2>Simple, flexible & transparent pricing for businesses of all sizes</h2>
//                 <div className="pricing-cards">
//                     <div className="pricing-card">
//                         <h3>Pay-as-you-go</h3>
//                         <p>Simple usage-based pricing means you don’t get locked into big contracts.</p>
//                     </div>
//                     <div className="pricing-card">
//                         <h3>Volume discounts</h3>
//                         <p>Discounts trigger as your usage grows, so you always get a fair price.</p>
//                     </div>
//                     <div className="pricing-card">
//                         <h3>Committed-use discounts</h3>
//                         <p>
//                             Talk with our sales team for access to deeper discounts when you commit to usage.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Pricing Table Section */}
//             <div className="pricing-container">
//                 <h1 className="pricing-title">Authentication / User Onboarding - Pricing</h1>
//                 <table className="pricing-table">
//                     <thead>
//                         <tr>
//                             <th>Auth per month</th>
//                             <th>WhatsApp</th>
//                             <th>SMS</th>
//                             <th>Email</th>
//                             <th>Biometric + 2FA</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>0 - 500</td>
//                             <td>₹0.31</td>
//                             <td>₹0.21</td>
//                             <td>₹0.10</td>
//                             <td>₹0.56</td>
//                         </tr>
//                         <tr>
//                             <td>501 - 1500</td>
//                             <td>₹0.28</td>
//                             <td>₹0.19</td>
//                             <td>₹0.09</td>
//                             <td>₹0.49</td>
//                         </tr>
//                         <tr>
//                             <td>1501 - 3500</td>
//                             <td>₹0.24</td>
//                             <td>₹0.17</td>
//                             <td>₹0.08</td>
//                             <td>₹0.43</td>
//                         </tr>
//                         <tr>
//                             <td>3501+</td>
//                             <td>₹0.20</td>
//                             <td>₹0.15</td>
//                             <td>₹0.07</td>
//                             <td>₹0.38</td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 {/* Free Credit Section */}
//                 <div className="free-credit-section">
//                     <h2>Start with ₹1000 Free Credit</h2>
//                     <p>No Credit Card required</p>
//                     <p>
//                         Volumes are calculated by country + channel. They cannot be combined to qualify for
//                         discounts.
//                     </p>
//                     <button className="get-started-btn" onClick={handleGetStarted}>
//                         Get Started
//                     </button>
//                 </div>

//                 {/* Committed Use Section */}
//                 <div className="committed-use-section">
//                     <h2>Committed-use Discounts</h2>
//                     <p>Get a tailored solution and pricing. Contact our sales team now.</p>
//                     <button className="contact-sales-btn" onClick={handleContactSales}>
//                         Contact Sales
//                     </button>
//                 </div>

//                 {/* Price Calculator Section */}
//                 <div className="price-calculator">
//                     <h2>Price Calculator</h2>
//                     <p>Start building your Sign in page with WhatsApp, Email, and SMS and convert more users.</p>
//                     <div className="calculator">
//                         <div className="dropdown">
//                             <label htmlFor="country">Choose a country: </label>
//                             <select id="country">
//                                 <option value="India">India</option>
//                                 <option value="Unavailable">*Coming soon to other regions</option>
//                             </select>
//                         </div>
//                         <div className="sliders">
//                             <div className="slider">
//                                 <label>WhatsApp/mo: {whatsAppValue.toLocaleString()}</label>
//                                 <input
//                                     type="range"
//                                     min="0"
//                                     max="50000"
//                                     step="1000"
//                                     value={whatsAppValue}
//                                     onChange={(e) => setWhatsAppValue(Number(e.target.value))}
//                                 />
//                             </div>
//                             <div className="slider">
//                                 <label>SMS/mo: {smsValue.toLocaleString()}</label>
//                                 <input
//                                     type="range"
//                                     min="0"
//                                     max="50000"
//                                     step="1000"
//                                     value={smsValue}
//                                     onChange={(e) => setSmsValue(Number(e.target.value))}
//                                 />
//                             </div>
//                             <div className="slider">
//                                 <label>Email/mo: {emailValue.toLocaleString()}</label>
//                                 <input
//                                     type="range"
//                                     min="0"
//                                     max="50000"
//                                     step="1000"
//                                     value={emailValue}
//                                     onChange={(e) => setEmailValue(Number(e.target.value))}
//                                 />
//                             </div>
//                         </div>
//                         <div className="summary">
//                             <p>Total Auths/mo: {totalAuths.toLocaleString()}</p>
//                             <p>Per Auth/mo: ~₹{costPerAuth.toFixed(2)}</p>
//                             <p>Total Cost: ₹{totalCost.toFixed(2)}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Price;










// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Price.css";

// const Price = () => {
//   const navigate = useNavigate();
//   const [whatsAppValue, setWhatsAppValue] = useState(0);
//   const [smsValue, setSmsValue] = useState(0);
//   const [emailValue, setEmailValue] = useState(0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const totalAuths = whatsAppValue + smsValue + emailValue;
//   const costPerAuth =
//     totalAuths <= 500 ? 0.31 : totalAuths <= 1500 ? 0.28 : totalAuths <= 3500 ? 0.24 : 0.22;
//   const totalCost = totalAuths * costPerAuth;

//   const handleGetStarted = () => {
//     navigate("/signup");
//   };

//   const handleContactSales = () => {
//     alert("Contact sales functionality coming soon!");
//   };

//   return (
//     <div className="pricing-page">
//       {/* Pricing Header Section */}
//       <div className="pricing-header">
//         <h2>Simple, Flexible & Transparent Pricing for Businesses of All Sizes</h2>
//         <div className="pricing-cards">
//           <div className="pricing-card">
//             <h3>Pay-as-you-go</h3>
//             <p>Simple usage-based pricing means you don’t get locked into big contracts.</p>
//           </div>
//           <div className="pricing-card">
//             <h3>Volume Discounts</h3>
//             <p>Discounts trigger as your usage grows, so you always get a fair price.</p>
//           </div>
//           <div className="pricing-card">
//             <h3>Committed-use Discounts</h3>
//             <p>Talk with our sales team for access to deeper discounts when you commit to usage.</p>
//           </div>
//         </div>
//       </div>

//       {/* Pricing Table Section */}
//       <div className="pricing-table-wrapper">
//       <h1 className="service-header">Authentication / User Onboarding - Pricing</h1>
//         <div className="pricing-header-row">
//           <div className="country-selector">
//             <label htmlFor="country">Choose a country:</label>
//             <select id="country">
//               <option value="India">India</option>
//               <option value="US">US (Coming Soon)</option>
//             </select>
//           </div>
//           <div className="currency-selector">
//             <label htmlFor="currency">Choose a currency:</label>
//             <select id="currency">
//               <option value="INR">INR</option>
//               <option value="USD">USD</option>
//             </select>
//           </div>
//         </div>

//         <table className="pricing-table">
//     <thead>
//         <tr>
//             <th>Auth per month</th>
//             <th>WhatsApp</th>
//             <th>SMS</th>
//             <th>Email</th>
//             <th>Biometric + 2FA</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>First 500 auth (0-500)</td>
//             <td>₹0.31</td>
//             <td>₹0.21</td>
//             <td>₹0.10</td>
//             <td>
//                 <div className="coming-soon-cell">
//                     ₹0.56
//                     <span className="coming-soon-label">✨ coming soon</span>
//                 </div>
//             </td>
//         </tr>
//         <tr>
//             <td>Next 1000 auth (500-1500)</td>
//             <td>₹0.28</td>
//             <td>₹0.19</td>
//             <td>₹0.09</td>
//             <td>
//                 <div className="coming-soon-cell">
//                     ₹0.49
//                     <span className="coming-soon-label">✨ coming soon</span>
//                 </div>
//             </td>
//         </tr>
//         <tr>
//             <td>Next 2000 auth (1500-3500)</td>
//             <td>₹0.24</td>
//             <td>₹0.17</td>
//             <td>₹0.08</td>
//             <td>
//                 <div className="coming-soon-cell">
//                     ₹0.43
//                     <span className="coming-soon-label">✨ coming soon</span>
//                 </div>
//             </td>
//         </tr>
//         <tr>
//             <td>More than 3500 auth</td>
//             <td>₹0.22</td>
//             <td>₹0.15</td>
//             <td>₹0.07</td>
//             <td>
//                 <div className="coming-soon-cell">
//                     ₹0.38
//                     <span className="coming-soon-label">✨ coming soon</span>
//                 </div>
//             </td>
//         </tr>
//     </tbody>
// </table>


//         <div className="pricing-footer">
//           <div className="free-credit">
//             <h2>Start with ₹1000 Free Credit</h2>
//             <p>No credit card required</p>
//           </div>
//           <button className="get-started-btn" onClick={handleGetStarted}>
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Committed-use Discounts Section */}
//       <div className="discount-section">
//         <h2>Committed-use Discounts</h2>
//         <p>Get a tailored solution and pricing. Contact our sales team now.</p>
//         <button className="contact-sales-btn" onClick={handleContactSales}>
//           Contact Sales
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Price;











import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import servicesData from "./servicesData"; // Import servicesData
import "../styles/Price.css";

const Price = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams(); // Get the service ID from the route params
  const service = servicesData.find((item) => item.id === serviceId); // Find the corresponding service

  const [whatsAppValue, setWhatsAppValue] = useState(0);
  const [smsValue, setSmsValue] = useState(0);
  const [emailValue, setEmailValue] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalAuths = whatsAppValue + smsValue + emailValue;
  const costPerAuth =
    totalAuths <= 500 ? 0.31 : totalAuths <= 1500 ? 0.28 : totalAuths <= 3500 ? 0.24 : 0.22;
  const totalCost = totalAuths * costPerAuth;

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleContactSales = () => {
    alert("Contact sales functionality coming soon!");
  };

  return (
    <div className="pricing-page">
      {/* Pricing Header Section */}
      <div className="pricing-header">
        <h2>Simple, Flexible & Transparent Pricing for Businesses of All Sizes</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Pay-as-you-go</h3>
            <p>Simple usage-based pricing means you don’t get locked into big contracts.</p>
          </div>
          <div className="pricing-card">
            <h3>Volume Discounts</h3>
            <p>Discounts trigger as your usage grows, so you always get a fair price.</p>
          </div>
          <div className="pricing-card">
            <h3>Committed-use Discounts</h3>
            <p>Talk with our sales team for access to deeper discounts when you commit to usage.</p>
          </div>
        </div>
      </div>

      {/* Pricing Table Section */}
      <div className="pricing-table-wrapper">
        {/* Dynamic Service Name Header */}
        <h1 className="service-header">
          {service ? `${service.title} - Pricing` : "Service Pricing"}
        </h1>

        <div className="pricing-header-row">
          <div className="country-selector">
            <label htmlFor="country">Choose a country:</label>
            <select id="country">
              <option value="India">India</option>
              <option value="US">US (Coming Soon)</option>
            </select>
          </div>
          <div className="currency-selector">
            <label htmlFor="currency">Choose a currency:</label>
            <select id="currency">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        <table className="pricing-table">
          <thead>
            <tr>
              <th>Auth per month</th>
              <th>WhatsApp</th>
              <th>SMS</th>
              <th>Email</th>
              <th>Biometric + 2FA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First 500 auth (0-500)</td>
              <td>₹0.31</td>
              <td>₹0.21</td>
              <td>₹0.10</td>
              <td>
                <div className="coming-soon-cell">
                  ₹0.56
                  <span className="coming-soon-label">✨ coming soon</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Next 1000 auth (500-1500)</td>
              <td>₹0.28</td>
              <td>₹0.19</td>
              <td>₹0.09</td>
              <td>
                <div className="coming-soon-cell">
                  ₹0.49
                  <span className="coming-soon-label">✨ coming soon</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Next 2000 auth (1500-3500)</td>
              <td>₹0.24</td>
              <td>₹0.17</td>
              <td>₹0.08</td>
              <td>
                <div className="coming-soon-cell">
                  ₹0.43
                  <span className="coming-soon-label">✨ coming soon</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>More than 3500 auth</td>
              <td>₹0.22</td>
              <td>₹0.15</td>
              <td>₹0.07</td>
              <td>
                <div className="coming-soon-cell">
                  ₹0.38
                  <span className="coming-soon-label">✨ coming soon</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pricing-footer">
          <div className="free-credit">
            <h2>Start with ₹1000 Free Credit</h2>
            <p>No credit card required</p>
          </div>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>

      {/* Committed-use Discounts Section */}
      <div className="discount-section">
        <h2>Committed-use Discounts</h2>
        <p>Get a tailored solution and pricing. Contact our sales team now.</p>
        <button className="contact-sales-btn" onClick={handleContactSales}>
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Price;
