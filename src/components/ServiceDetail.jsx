import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from './servicesData';
import '../styles/ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams(); // Get the service ID from the URL
    const navigate = useNavigate(); // For navigation
    const service = servicesData.find((item) => item.id === serviceId); // Find the service by ID

    if (!service) {
        return <h2>Service not found</h2>;
    }

    return (
        <div className="service-detail-container">
            <h1 className="service-detail-title">{service.title}</h1>
            <img src={service.img} alt={service.title} className="service-detail-icon" />
            <p className="service-detail-description">{service.description}</p>
            
            <div className="service-detail-extra">
                <h2>Detailed Information</h2>
                <p>{service.detailedInfo}</p>
            </div>

            {/* <div className="service-detail-pricing">
                <h2>Pricing Information</h2>
                <p>{service.pricingInfo}</p>
            </div> */}

            <button
                className="service-detail-pricing-button"
                onClick={() => navigate(`/services/${serviceId}/pricing`)} // Navigate to pricing page
            >
                See Pricing
            </button>
        </div>
    );
};

export default ServiceDetail;
