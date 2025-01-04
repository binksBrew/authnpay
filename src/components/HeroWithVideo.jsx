// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/HeroWithVideo.css';
// import tempVideo from '../assets/herovideo.mp4';

// const HeroWithVideo = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/signup');
//   };

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

//   return (
//     <>
//       {/* Intro Section */}
//       <section className="intro-section">
//         <div className="intro-container">
//           <div className="intro-left">
//             <h1 className="intro-headline">Transform Your Business with Seamless Authentication</h1>
//           </div>
//           <div className="intro-right">
//             <p className="intro-subheading">
//               Experience cutting-edge security solutions with AuthnPay. Simplify customer onboarding,
//               secure transactions, and boost conversions with advanced authentication methods tailored
//               for your business.
//             </p>
//             <div className="intro-buttons">
//               <button className="primary-btn" onClick={handleGetStarted}>
//                 Get Started
//               </button>
//               <button className="secondary-btn" onClick={handleLearnMore}>
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Hero Section with Video */}
//       <section className="hero-with-video">
//         <video autoPlay loop muted className="background-video">
//           <source src={tempVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-content">
//           <p className="tagline">ALL-IN-ONE</p>
//           <h1>Smart Authentication Suite<br />for your App/Website</h1>
//           <p className="description">
//             Sign in customers with WhatsApp, SMS, Email, and more with 98% conversion.
//           </p>
//           <button className="cta-button" onClick={handleGetStarted}>
//             Get Started
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroWithVideo;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroWithVideo.css';
import tempVideo from '../assets/herovideo.mp4';
import screenshot from '../assets/screenshot.png'; // Import the screenshot image

const HeroWithVideo = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <>
      {/* Intro Section
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-left">
            <h1 className="intro-headline">Transform Your Business with Seamless Authentication</h1>
          </div>
          <div className="intro-right">
            <p className="intro-subheading">
              Experience cutting-edge security solutions with AuthnPay. Simplify customer onboarding,
              secure transactions, and boost conversions with advanced authentication methods tailored
              for your business.
            </p>
            <div className="intro-buttons">
              <button className="primary-btn" onClick={handleGetStarted}>
                Get Started
              </button>
              <button className="secondary-btn" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Hero Section with Video */}
      <section className="hero-with-video">
        <video autoPlay loop muted className="background-video">
          <source src={tempVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <p className="tagline">ALL-IN-ONE</p>
          <h1>Smart Authentication Suite<br />for your App/Website</h1>
          <p className="description">
            Sign in customers with WhatsApp, SMS, Email, and more with 98% conversion.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="screenshot-section">
        <div className="screenshot-container">
          <img src={screenshot} alt="AuthnPay Features" className="screenshot-image" />
        </div>
      </section>
    </>
  );
};

export default HeroWithVideo;
