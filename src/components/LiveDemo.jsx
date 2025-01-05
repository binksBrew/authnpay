import React, { useEffect, useState } from "react";
import servicesData from "./servicesData"; // Import services data
import "../styles/LiveDemo.css";

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState("demo");
  const [countryCode, setCountryCode] = useState("+91");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="livedemo-container">
      <div className="livedemo-content">
        {/* Left Section */}
        <div className="livedemo-left">
          <h1>Schedule meeting</h1>
          <p>
            <span>🕒 30 Min</span> | <span>📹 Google Meet</span>
          </p>
          {activeTab === "demo" ? (
            <p>
              Schedule a call with a product expert to dive deeper into our
              offerings. Get personalized advice and insights to make the most
              out of our products tailored to your project's requirements.
            </p>
          ) : (
            <p>
              Arrange a call with an integration expert to ensure a smooth
              setup. Our specialists are here to guide you through the
              integration process and troubleshooting any challenges.
            </p>
          )}
        </div>

        {/* Right Section */}
        <div className="livedemo-right">
          <div className="toggle-buttons">
            <button
              className={activeTab === "demo" ? "active" : ""}
              onClick={() => handleTabChange("demo")}
            >
              Demo Call
            </button>
            <button
              className={activeTab === "integration" ? "active" : ""}
              onClick={() => handleTabChange("integration")}
            >
              Integration Call
            </button>
          </div>

          <form className="livedemo-form">
            <div className="form-group">
              <label htmlFor="service">Select Service</label>
              <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select a service</option>
                {servicesData.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            {activeTab === "integration" && (
              <div className="form-group">
                <label htmlFor="platform">Select your platform</label>
                <select id="platform">
                  <option value="">Select your platform</option>
                  <option value="wordpress">WordPress</option>
                  <option value="shopify">Shopify</option>
                  <option value="website">Website</option>
                  <option value="android">Android</option>
                  <option value="ios">iOS</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="emails">Participants emails</label>
              <input
                type="email"
                id="emails"
                placeholder="Enter participants' emails"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <div className="mobile-input">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                type="url"
                id="website"
                placeholder="Enter your website"
                required
              />
            </div>
            <button type="submit" className="next-button">
              Next &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
