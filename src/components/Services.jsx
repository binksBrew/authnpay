// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import servicesData from './servicesData';
// import '../styles/Services.css';

// const Services = () => {
//     return (
//         <div className="services-container">
//             <h1 className="services-title">Our Services</h1>
//             <div className="services-grid">
//                 {servicesData.map((service, index) => (
//                     <Link
//                         key={index}
//                         to={`/services/${service.id}`} // Use the service ID for navigation
//                         className="service-card-link" // Add a custom class for styling the link
//                     >
//                         <div className="service-card">
//                             <img
//                                 src={service.img}
//                                 alt={service.title}
//                                 className="service-icon"
//                             />
//                             <h3 className="service-title">{service.title}</h3>
//                             <p className="service-description">{service.description}</p>
//                             <span className="service-link">Learn More</span>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;
















// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import servicesData from './servicesData';
// import '../styles/Services.css';

// const Services = () => {
//     return (
//         <div className="services-container" id="services"> {/* Added id="services" */}
//             <h1 className="services-title">Our Services</h1>
//             <div className="services-grid">
//                 {servicesData.map((service, index) => (
//                     <Link
//                         key={index}
//                         to={`/services/${service.id}`} // Use the service ID for navigation
//                         className="service-card-link" // Add a custom class for styling the link
//                     >
//                         <div className="service-card">
//                             <img
//                                 src={service.img}
//                                 alt={service.title}
//                                 className="service-icon"
//                             />
//                             <h3 className="service-title">{service.title}</h3>
//                             <p className="service-description">{service.description}</p>
//                             <span className="service-link">Learn More</span>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;









import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import servicesData from './servicesData';
import '../styles/Services.css';

const Services = () => {
    return (
        <>
            

            {/* Services Section */}
            <div className="services-container" id="services">
                <h1 className="services-title">Our Services</h1>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <Link
                            key={index}
                            to={`/services/${service.id}`} // Use the service ID for navigation
                            className="service-card-link" // Add a custom class for styling the link
                        >
                            <div className="service-card">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="service-icon"
                                />
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <span className="service-link">Learn More</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            
        </>
    );
};

export default Services;
