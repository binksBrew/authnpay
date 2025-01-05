import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData"; // Import servicesData
import "../styles/Price.css";
import Calculator from "./Calculator";

const Price = ({ openSignupPopup }) => {
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
          <button className="get-started-btn" onClick={openSignupPopup}>
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
      <Calculator openSignupPopup={openSignupPopup} />
    </div>
  );
};

export default Price;
