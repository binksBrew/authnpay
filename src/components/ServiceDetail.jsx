// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import servicesData from './servicesData';
// import '../styles/ServiceDetail.css';

// const ServiceDetail = () => {
//     const { serviceId } = useParams(); // Get the service ID from the URL
//     const navigate = useNavigate(); // For navigation
//     const service = servicesData.find((item) => item.id === serviceId); // Find the service by ID

//     // Scroll to the top on component mount
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top-left corner of the page
//     }, []);

//     if (!service) {
//         return <h2>Service not found</h2>;
//     }

//     return (
//         <div className="service-detail-container">
//             <h1 className="service-detail-title">{service.title}</h1>
//             <img src={service.img} alt={service.title} className="service-detail-icon" />
//             <p className="service-detail-description">{service.description}</p>
            
//             <div className="service-detail-extra">
//                 <h2>Detailed Information</h2>
//                 <p>{service.detailedInfo}</p>
//             </div>

//             <button
//                 className="service-detail-pricing-button"
//                 onClick={() => navigate(`/services/${serviceId}/pricing`)} // Navigate to pricing page
//             >
//                 See Pricing
//             </button>
//         </div>
//     );
// };

// export default ServiceDetail;














// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import servicesData from './servicesData';
// import '../styles/ServiceDetail.css';

// const ServiceDetail = () => {
//     const { serviceId } = useParams();
//     const navigate = useNavigate();
//     const service = servicesData.find((item) => item.id === serviceId);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (!service) {
//         return <h2>Service not found</h2>;
//     }

//     return (
//         <>
//             <div className="service-detail-wrapper">
//                 <div className="service-detail-container">
//                     <div className="service-detail-left">
//                         <img src={service.img} alt={service.title} className="service-detail-icon" />
//                         <h1 className="service-detail-title">{service.title}</h1>
//                         <button
//                             className="service-detail-pricing-button"
//                             onClick={() => navigate(`/services/${serviceId}/pricing`)}
//                         >
//                             See Pricing
//                         </button>
//                     </div>
//                     <div className="service-detail-right">
//                         <h2 className="service-detail-heading">Fast, simple and secure</h2>
//                         <p className="service-detail-description">
//                             {service.description}
//                         </p>
//                         <ul className="service-detail-points">
//                             {service.keyPoints.map((point, index) => (
//                                 <li key={index} className="service-point">
//                                     {point}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
            
//         </>
//     );
// };

// export default ServiceDetail;














// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import servicesData from './servicesData';
// import '../styles/ServiceDetail.css';

// const ServiceDetail = () => {
//     const { serviceId } = useParams();
//     const navigate = useNavigate();
//     const service = servicesData.find((item) => item.id === serviceId);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (!service) {
//         return <h2>Service not found</h2>;
//     }

//     return (
//         <>
//             <div className="service-detail-wrapper">
//                 <div className="service-detail-container">
//                     <div className="service-detail-left">
//                         <img src={service.img} alt={service.title} className="service-detail-icon" />
//                         <h1 className="service-detail-title">{service.title}</h1>
//                         <button
//                             className="service-detail-pricing-button"
//                             onClick={() => navigate('/signup')} // Navigate to sign-up page
//                         >
//                             Get Started
//                         </button>
//                     </div>
//                     <div className="service-detail-right">
//                         <h2 className="service-detail-heading">Fast, simple and secure</h2>
//                         <p className="service-detail-description">
//                             {service.description}
//                         </p>
//                         <ul className="service-detail-points">
//                             {service.keyPoints.map((point, index) => (
//                                 <li key={index} className="service-point">
//                                     {point}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ServiceDetail;








import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";
import "../styles/ServiceDetail.css";

const ServiceDetail = () => {
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
            onClick={() => window.location.href = "/signup"}
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
