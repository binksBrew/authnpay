import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData"; // Import servicesData
import "../styles/Price.css";
import Calculator from "./Calculator";

const Price = ({ openSignupPopup }) => {
  const { serviceId } = useParams(); // Get the service ID from the route params
  const service = servicesData.find((item) => item.id === serviceId); // Find the corresponding service

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  // Extract column headers dynamically from the pricing table
  const pricingHeaders = service.pricingTable.length
    ? Object.keys(service.pricingTable[0])
    : [];

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
  {/* Country Selector */}
  <div className="country-selector">
    <label htmlFor="country">Choose a country:</label>
    <select id="country">
      <option value="India">India</option>
      <option value="disabled" disabled>
        (currently available only in India)
      </option>
    </select>
  </div>

  {/* Currency Selector */}
  <div className="currency-selector">
    <label htmlFor="currency">Choose a currency:</label>
    <select id="currency">
      <option value="INR">INR</option>
    </select>
  </div>
</div>

        {/* Dynamic Pricing Table */}
        <table className="pricing-table">
          <thead>
            <tr>
              {pricingHeaders.map((header, index) => (
                <th key={index}>
                  {header.replace(/([A-Z])/g, " $1")} {/* Format header names */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {service.pricingTable.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {pricingHeaders.map((header, colIndex) => (
                  <td key={colIndex}>
                    {/* Check for "coming soon" in specific columns */}
                    {header === "faceKey" || header === "access" ? (
                      <div className="coming-soon-cell">
                        {row[header]}
                        <span className="coming-soon-label">✨ coming soon</span>
                      </div>
                    ) : (
                      row[header]
                    )}
                  </td>
                ))}
              </tr>
            ))}
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
