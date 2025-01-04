// import React, { useState } from "react";
// import "../styles/SignupPopup.css";

// const SignupPopup = ({ closePopup }) => {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   return (
//     <div className="signup-popup-overlay">
//       <div className="signup-popup">
//         <button className="close-btn" onClick={closePopup}>
//           &times;
//         </button>
//         <div className="signup-content">
//           {step === 1 && (
//             <>
//               <h2>USAI ID</h2>
//               <input type="text" placeholder="Enter your USAI ID" required />
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2>Business Registration</h2>
//               <input type="text" placeholder="Enter your Business Name" required />
//               <input type="text" placeholder="Enter your Business PAN (Optional)" />
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h2>Business Address</h2>
//               <textarea placeholder="Enter your Business Address" rows="3" required />
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h2>Is your Website/App Live?</h2>
//               <div className="button-group">
//                 <button className="option-btn">Yes</button>
//                 <button className="option-btn">Will Be Live Soon</button>
//               </div>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h2>Business Type</h2>
//               <div className="button-group">
//                 <button className="option-btn">Private Limited Company</button>
//                 <button className="option-btn">Public Limited Company</button>
//                 <button className="option-btn">Proprietorship</button>
//                 <button className="option-btn">Partnership/LLP</button>
//                 <button className="option-btn">Trust/Society</button>
//                 <button className="option-btn">Hindu Undivided Family</button>
//                 <button className="option-btn">Unregistered</button>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="signup-navigation">
//           {step > 1 && (
//             <button className="back-btn" onClick={prevStep}>
//               Back
//             </button>
//           )}
//           {step < 5 ? (
//             <button className="next-btn" onClick={nextStep}>
//               Next
//             </button>
//           ) : (
//             <button className="submit-btn">Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPopup;












import React, { useState } from "react";
import "../styles/SignupPopup.css";

const SignupPopup = ({ closePopup }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    usaiId: "",
    businessName: "",
    businessPAN: "",
    businessAddress: "",
    websiteStatus: "",
    businessType: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted: ", formData);
    closePopup();
  };

  return (
    <div className="signup-popup-overlay">
      <div className="signup-popup">
        <button className="close-btn" onClick={closePopup}>
          &times;
        </button>
        <div className="signup-content">
          {step === 1 && (
            <>
              <h2>USAI ID</h2>
              <input
                type="text"
                name="usaiId"
                placeholder="Enter your USAI ID"
                value={formData.usaiId}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          {step === 2 && (
            <>
              <h2>Business Registration</h2>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="businessPAN"
                placeholder="Enter your Business PAN (Optional)"
                value={formData.businessPAN}
                onChange={handleInputChange}
              />
            </>
          )}

          {step === 3 && (
            <>
              <h2>Business Address</h2>
              <textarea
                name="businessAddress"
                placeholder="Enter your Business Address"
                rows="3"
                value={formData.businessAddress}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          {step === 4 && (
            <>
              <h2>Is your Website/App Live?</h2>
              <div>
                <label>
                  <input
                    type="radio"
                    name="websiteStatus"
                    value="yes"
                    checked={formData.websiteStatus === "yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="websiteStatus"
                    value="soon"
                    checked={formData.websiteStatus === "soon"}
                    onChange={handleInputChange}
                  />
                  Will Be Live Soon
                </label>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2>Business Type</h2>
              <div>
                {[
                  "Private Limited Company",
                  "Public Limited Company",
                  "Proprietorship",
                  "Partnership/LLP",
                  "Trust/Society",
                  "Hindu Undivided Family",
                  "Unregistered",
                ].map((type) => (
                  <label key={type}>
                    <input
                      type="radio"
                      name="businessType"
                      value={type}
                      checked={formData.businessType === type}
                      onChange={handleInputChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="signup-navigation">
          {step > 1 && (
            <button className="back-btn" onClick={prevStep}>
              Back
            </button>
          )}
          {step < 5 ? (
            <button className="next-btn" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
