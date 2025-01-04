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

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const openSignupPopup = () => setShowSignup(true);
  const closeSignupPopup = () => setShowSignup(false);

  return (
    <Router>
      <div>
        <Header openSignupPopup={openSignupPopup} />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <HeroWithVideo openSignupPopup={openSignupPopup} />
                <JoinUs openSignupPopup={openSignupPopup} />
                <Compliance />
                <WeAreOnline />
                <TrustedCompanies />
                <IntegrateNow />
                <FeaturesSection />
                <FindUs />
                <FAQ />
              </>
            }
          />
          {/* Service Details Route */}
          {/* <Route path="/services/:serviceId" element={<ServiceDetail />} /> */}
          <Route path="/services/:serviceId" element={<ServiceDetail openSignupPopup={openSignupPopup} />}/>
          {/* <Route path="/services/:serviceId/pricing" element={<Price />} /> */}
          <Route path="/services/:serviceId/pricing" element={<Price openSignupPopup={openSignupPopup} />}/>


          {/* Other Routes */}
          <Route path="/livedemo" element={<LiveDemo />} />
          <Route path="/trustedcompanies" element={<TrustedCompanies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/integratenow" element={<IntegrateNow />} />
          <Route path="/featuressection" element={<FeaturesSection />} />
          <Route path="/support" element={<Support />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />

        </Routes>

        <Footer />

        {/* Signup Popup */}
        {showSignup && <SignupPopup closePopup={closeSignupPopup} />}
      </div>
    </Router>
  );
}

export default App;
