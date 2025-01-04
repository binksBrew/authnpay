// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroWithVideo from "./components/HeroWithVideo";
// // import Services from "./components/Services";
// import JoinUs from "./components/JoinUs";
// import WeAreOnline from "./components/WeAreOnline";
// import FindUs from "./components/FindUs";
// import ServiceDetail from "./components/ServiceDetail";
// import Price from "./components/Price";
// import Signup from "./components/Signup";
// import LiveDemo from "./components/LiveDemo"; // Import the LiveDemo component
// import TrustedCompanies from "./components/TrustedCompanies";
// import FAQ from "./components/FAQ";
// import IntegrateNow from "./components/IntegrateNow";
// import FeaturesSection from "./components/FeaturesSection";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroWithVideo />
//                 {/* <Services /> */}
//                 <JoinUs />
//                 <WeAreOnline />
//                 <TrustedCompanies/>
//                 <IntegrateNow/>
//                 < FeaturesSection/>
//                 <FindUs />
//                 <FAQ/>
//               </>
//             }
//           />

//           {/* Dynamic Service Detail Page */}
//           <Route path="/services/:serviceId" element={<ServiceDetail />} />


//           {/* Dynamic Pricing Page */}
//           <Route path="/services/:serviceId/pricing" element={<Price />} />


//           {/* Signup Page */}
//           <Route path="/signup" element={<Signup />} />

//           {/* Live Demo Page */}
//           <Route path="/livedemo" element={<LiveDemo />} /> 
//           {/* <Route path="/services" element={<Services />} />  */}
//           <Route path="/trustedcompanies" element={<TrustedCompanies />} /> 
//           <Route path="/faq" element={<FAQ />} /> 
//           <Route path="/integratenow" element={<IntegrateNow />} /> 
//           <Route path="/featuressection" element={< FeaturesSection/>} /> 



//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;











// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroWithVideo from "./components/HeroWithVideo";
// // import Services from "./components/Services";
// import JoinUs from "./components/JoinUs";
// import WeAreOnline from "./components/WeAreOnline";
// import FindUs from "./components/FindUs";
// import ServiceDetail from "./components/ServiceDetail";
// import Price from "./components/Price";
// import SignupPopup from "./components/SignupPopup"; // Import the popup
// import LiveDemo from "./components/LiveDemo"; // Import the LiveDemo component
// import TrustedCompanies from "./components/TrustedCompanies";
// import FAQ from "./components/FAQ";
// import IntegrateNow from "./components/IntegrateNow";
// import FeaturesSection from "./components/FeaturesSection";

// function App() {
//   const [showSignup, setShowSignup] = useState(false); // State to manage popup visibility

//   const openSignupPopup = () => setShowSignup(true);
//   const closeSignupPopup = () => setShowSignup(false);

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroWithVideo />
//                 {/* <Services /> */}
//                 <JoinUs />
//                 <WeAreOnline />
//                 <TrustedCompanies />
//                 <IntegrateNow />
//                 <FeaturesSection />
//                 <FindUs />
//                 <FAQ />
//               </>
//             }
//           />

//           {/* Dynamic Service Detail Page */}
//           <Route path="/services/:serviceId" element={<ServiceDetail />} />

//           {/* Dynamic Pricing Page */}
//           <Route path="/services/:serviceId/pricing" element={<Price />} />

//           {/* Live Demo Page */}
//           <Route path="/livedemo" element={<LiveDemo />} />

//           {/* Other Routes */}
//           <Route path="/trustedcompanies" element={<TrustedCompanies />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/integratenow" element={<IntegrateNow />} />
//           <Route path="/featuressection" element={<FeaturesSection />} />
//         </Routes>
//         <Footer />

//         {/* Signup Popup */}
//         {showSignup && <SignupPopup closePopup={closeSignupPopup} />}
//       </div>

//       {/* Button to trigger Signup Popup
//       <button
//         className="open-signup-btn"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           padding: "10px 20px",
//           cursor: "pointer",
//         }}
//         onClick={openSignupPopup}
//       >
//         Sign Up
//       </button> */}
//     </Router>
//   );
// }

// export default App;










import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroWithVideo from "./components/HeroWithVideo";
import JoinUs from "./components/JoinUs";
import WeAreOnline from "./components/WeAreOnline";
import FindUs from "./components/FindUs";
import ServiceDetail from "./components/ServiceDetail";
import Price from "./components/Price";
import SignupPopup from "./components/SignupPopup"; // Import the popup
import LiveDemo from "./components/LiveDemo";
import TrustedCompanies from "./components/TrustedCompanies";
import FAQ from "./components/FAQ";
import IntegrateNow from "./components/IntegrateNow";
import FeaturesSection from "./components/FeaturesSection";
import Support from "./components/Support";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const openSignupPopup = () => setShowSignup(true);
  const closeSignupPopup = () => setShowSignup(false);

  return (
    <Router>
      <div>
        <Header openSignupPopup={openSignupPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroWithVideo />
                <JoinUs />
                <WeAreOnline />
                <TrustedCompanies />
                <IntegrateNow />
                <FeaturesSection />
                <FindUs />
                <FAQ />
              </>
            }
          />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/services/:serviceId/pricing" element={<Price />} />
          <Route path="/livedemo" element={<LiveDemo />} />
          <Route path="/trustedcompanies" element={<TrustedCompanies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/integratenow" element={<IntegrateNow />} />
          <Route path="/featuressection" element={<FeaturesSection />} />
          <Route path="/support" element={<Support />} />

        </Routes>
        <Footer />

        {/* Signup Popup */}
        {showSignup && <SignupPopup closePopup={closeSignupPopup} />}
      </div>
    </Router>
  );
}

export default App;
