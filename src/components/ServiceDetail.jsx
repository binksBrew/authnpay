import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";
import "../styles/ServiceDetail.css";

const ServiceDetail = ({ openSignupPopup }) => {
  const { serviceId } = useParams();
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-detail-wrapper">
      <div className="service-detail-container">
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
        <div className="service-detail-right">
          <h2 className="service-detail-heading">Fast, simple, and secure</h2>
          <p className="service-detail-description">{service.description}</p>
          <ul className="service-detail-points">
            {service.keyPoints.map((point, index) => (
              <li key={index} className="service-point">{point}</li>
            ))}
          </ul>
          <h3>Pricing Information</h3>
          <p>{service.pricingInfo}</p>
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Range</th>
                <th>WhatsApp</th>
                <th>SMS</th>
                <th>Email</th>
                <th>Biometric</th>
              </tr>
            </thead>
            <tbody>
              {service.pricingTable.map((row, index) => (
                <tr key={index}>
                  <td>{row.range}</td>
                  <td>{row.whatsapp}</td>
                  <td>{row.sms}</td>
                  <td>{row.email}</td>
                  <td>{row.biometric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
