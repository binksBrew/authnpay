// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HeroWithVideo from './components/HeroWithVideo';
// import Services from './components/Services';
// import JoinUs from './components/JoinUs';
// import WeAreOnline from './components/WeAreOnline';
// import FindUs from './components/FindUs';
// import ServiceDetail from './components/ServiceDetail';
// import Price from './components/Price';
// import Signup from './components/Signup';

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
//                 <Services />
//                 <JoinUs />
//                 <WeAreOnline />
//                 <FindUs />
//               </>
//             }
//           />

//           {/* Dynamic Service Detail Page */}
//           <Route path="/services/:serviceId" element={<ServiceDetail />} />

//           {/* Dynamic Pricing Page */}
//           <Route path="/services/:serviceId/pricing" element={<Price />} />

//           {/* Signup Page */}
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;










import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroWithVideo from "./components/HeroWithVideo";
import Services from "./components/Services";
import JoinUs from "./components/JoinUs";
import WeAreOnline from "./components/WeAreOnline";
import FindUs from "./components/FindUs";
import ServiceDetail from "./components/ServiceDetail";
import Price from "./components/Price";
import Signup from "./components/Signup";
import LiveDemo from "./components/LiveDemo"; // Import the LiveDemo component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroWithVideo />
                <Services />
                <JoinUs />
                <WeAreOnline />
                <FindUs />
              </>
            }
          />

          {/* Dynamic Service Detail Page */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          {/* Dynamic Pricing Page */}
          <Route path="/services/:serviceId/pricing" element={<Price />} />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Live Demo Page */}
          <Route path="/livedemo" element={<LiveDemo />} /> {/* New Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;