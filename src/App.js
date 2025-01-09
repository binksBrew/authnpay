// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroWithVideo from "./components/HeroWithVideo";
// import JoinUs from "./components/JoinUs";
// import WeAreOnline from "./components/WeAreOnline";
// import FindUs from "./components/FindUs";
// import ServiceDetail from "./components/ServiceDetail";
// import Price from "./components/Price";
// import SignupPopup from "./components/SignupPopup";
// import LiveDemo from "./components/LiveDemo";
// import TrustedCompanies from "./components/TrustedCompanies";
// import FAQ from "./components/FAQ";
// import IntegrateNow from "./components/IntegrateNow";
// import FeaturesSection from "./components/FeaturesSection";
// import Support from "./components/Support";
// import Compliance from "./components/Compliance";
// import SecurityCompliance from "./components/SecurityCompliance";
// import USAI from "./components/USAI";
// import LoginPlatform from "./components/LoginPlatform";
// import ComingSoon from "./components/ComingSoon";
// import AnnouncementBar from "./components/AnnouncementBar";

// function App() {
//   const [showSignup, setShowSignup] = useState(false);

//   const openSignupPopup = () => setShowSignup(true);
//   const closeSignupPopup = () => setShowSignup(false);

//   return (
//     <Router>
//       <div>
//         <Header openSignupPopup={openSignupPopup} />
//         <Routes>
//           {/* Home Route */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroWithVideo openSignupPopup={openSignupPopup} />
//                 <JoinUs openSignupPopup={openSignupPopup} />
//                 <Compliance />
//                 <WeAreOnline />
//                 <TrustedCompanies />
//                 <IntegrateNow />
//                 <FeaturesSection />
//                 <FindUs />
//                 <FAQ />
//               </>
//             }
//           />
//           {/* Service Details Route */}
//           {/* <Route path="/services/:serviceId" element={<ServiceDetail />} /> */}
//           <Route path="/services/:serviceId" element={<ServiceDetail openSignupPopup={openSignupPopup} />}/>
//           {/* <Route path="/services/:serviceId/pricing" element={<Price />} /> */}
//           <Route path="/services/:serviceId/pricing" element={<Price openSignupPopup={openSignupPopup} />}/>

//           services/authentication-user-onboarding/pricing

//           {/* Other Routes */}
//           <Route path="/livedemo" element={<LiveDemo />} />
//           <Route path="/trustedcompanies" element={<TrustedCompanies />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/integratenow" element={<IntegrateNow />} />
//           <Route path="/featuressection" element={<FeaturesSection />} />
//           <Route path="/support" element={<Support />} />
//           <Route path="/compliance" element={<Compliance />} />
//           <Route path="/security-compliance" element={<SecurityCompliance />} />
//           <Route path="/usai" element={<USAI />} />
//           <Route path="/loginplatform" element={<LoginPlatform />} />
//           <Route path="/comingsoon" element={<ComingSoon />} />

//         </Routes>

//         <Footer />

//         {/* Signup Popup */}
//         {showSignup && <SignupPopup closePopup={closeSignupPopup} />}
//       </div>
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
import SignupPopup from "./components/SignupPopup";
import LiveDemo from "./components/LiveDemo";
import TrustedCompanies from "./components/TrustedCompanies";
import FAQ from "./components/FAQ";
import IntegrateNow from "./components/IntegrateNow";
import FeaturesSection from "./components/FeaturesSection";
import Support from "./components/Support";
import Compliance from "./components/Compliance";
import SecurityCompliance from "./components/SecurityCompliance";
import USAI from "./components/USAI";
import LoginPlatform from "./components/LoginPlatform";
import ComingSoon from "./components/ComingSoon";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const openSignupPopup = () => setShowSignup(true);
  const closeSignupPopup = () => setShowSignup(false);

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <AnnouncementBar />
              <Header openSignupPopup={openSignupPopup} />
              <HeroWithVideo openSignupPopup={openSignupPopup} />
              <JoinUs openSignupPopup={openSignupPopup} />
              <Compliance />
              <WeAreOnline />
              <TrustedCompanies />
              <IntegrateNow />
              <FeaturesSection />
              <FindUs />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* Service Details Route */}
        <Route
          path="/services/:serviceId"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <ServiceDetail openSignupPopup={openSignupPopup} />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:serviceId/pricing"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <Price openSignupPopup={openSignupPopup} />
              <Footer />
            </>
          }
        />

        {/* Other Routes */}
        <Route
          path="/livedemo"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <LiveDemo />
              <Footer />
            </>
          }
        />
        <Route
          path="/trustedcompanies"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <TrustedCompanies />
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route
          path="/integratenow"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <IntegrateNow />
              <Footer />
            </>
          }
        />
        <Route
          path="/featuressection"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <FeaturesSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <Support />
              <Footer />
            </>
          }
        />
        <Route
          path="/compliance"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <Compliance />
              <Footer />
            </>
          }
        />
        <Route
          path="/security-compliance"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <SecurityCompliance />
              <Footer />
            </>
          }
        />
        <Route
          path="/usai"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <USAI />
              <Footer />
            </>
          }
        />
        <Route
          path="/loginplatform"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <LoginPlatform />
              <Footer />
            </>
          }
        />
        <Route
          path="/comingsoon"
          element={
            <>
              <Header openSignupPopup={openSignupPopup} />
              <ComingSoon />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* Signup Popup */}
      {showSignup && <SignupPopup closePopup={closeSignupPopup} />}
    </Router>
  );
}

export default App;
