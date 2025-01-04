import React from "react";
import "../styles/FeaturesSection.css";
import ss1 from "../assets/ss1.png"; // Horizontal images
import ss2 from "../assets/ss2.png"; // Vertical images

const FeaturesSection = () => {
  const features = [
    {
      title: "UI Customization",
      description:
        "Fully customizable sign-in pages. Build and deploy in seconds. Use beautiful pre-built UI or design the way you want.",
      image: ss1,
      orientation: "horizontal",
    },
    {
      title: "Every channel, Every method",
      description:
        "SMS, WhatsApp, Email, Biometric, Network Auth and 50+ Social Sign-In methods.",
      image: ss1,
      orientation: "horizontal",
    },
    {
      title: "Multi-factor Authentication",
      description:
        "Enable 2-FA even if users don’t have an authenticator app.",
      image: ss2,
      orientation: "vertical",
    },
    {
      title: "User & Session Management",
      description:
        "Manage sessions, block/delete users or manage access effortlessly.",
      image: ss2,
      orientation: "vertical",
    },
    {
      title: "Attack prevention",
      description:
        "Prevent brute-force, man-in-the-middle and social engineering attacks.",
      image: ss2,
      orientation: "vertical",
    },
    {
      title: "Analytics",
      description:
        "Get detailed insights and analytics about all of your users from a single view dashboard.",
      image: ss1,
      orientation: "horizontal",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h4>ALL-IN-ONE IDENTITY PLATFORM</h4>
        <h2>Everything you need for Authentication & User Management</h2>
        <p>Verify, manage and protect users on a single platform</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${
              feature.orientation === "vertical" ? "vertical" : "horizontal"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
