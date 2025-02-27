import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "./servicesData";
import "../styles/ServiceDetail.css";

const ServiceDetail = ({ openSignupPopup }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  // Navigate to Pricing Page
  const handleSeePricing = () => {
    navigate(`/services/${serviceId}/pricing`);
  };

  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-container">
        {/* Left Section */}
        <div className="service-detail-left">
          <img src={service.img} alt={service.title} className="service-detail-icon" />
          <h1 className="service-detail-title">{service.title}</h1>
          <button
            className="service-detail-pricing-button"
            onClick={openSignupPopup}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="service-detail-right">
          <h2 className="service-detail-heading">Quick, User-friendly, and Trustworthy</h2>
          <p className="service-detail-description">{service.description}</p>
          <ul className="service-detail-points">
            {service.keyPoints.map((point, index) => (
              <li key={index} className="service-point">{point}</li>
            ))}
          </ul>
          <button
            className="see-pricing-button"
            onClick={handleSeePricing}
          >
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
