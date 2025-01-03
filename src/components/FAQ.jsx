import React, { useState } from "react";
import "../styles/FAQ.css";
import androidIcon from "../assets/android.png"; // Android image
import appleIcon from "../assets/apple.png"; // Apple image

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which features are available in the app?",
      answer: "Our app provides multiple features including bill payments, money transfers, and easy access to services.",
    },
    {
      question: "How do I reset my app password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login screen.",
    },
    {
      question: "Is the app available for international users?",
      answer: "Yes, our app supports international users in select countries. Check the app for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {/* Download Section */}
      <div className="download-section">
        <p>Download the App to Pay from anywhere</p>
        <div className="download-buttons">
          <a href="#" className="download-btn">
            <img src={appleIcon} alt="Download on App Store" />
          </a>
          <a href="#" className="download-btn">
            <img src={androidIcon} alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
