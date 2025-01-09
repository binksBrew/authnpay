import React from "react";
import "../styles/USAI.css";
import simLockImg from "../assets/usai/simlock.jpg";
import deviceFusionImg from "../assets/usai/devicebinding.png";
import coreFrameImg from "../assets/usai/coreframe.jpg";
import quickKey1Img from "../assets/usai/otakey.jpg";
import quickKey2Img from "../assets/usai/otakey.jpg";
import quickKey3Img from "../assets/usai/otakey.jpg";
import geoSecureImg from "../assets/usai/geosecure.png";

const USAI = () => {
  const usaiData = [
    {
      title: "SimLock",
      description:
        "SimLock emphasizes strict binding and protection of the SIM to the device. This ensures that the SIM card functions exclusively with its designated device, preventing unauthorized access and safeguarding sensitive information.",
      image: simLockImg,
      reverse: false, // Image on the right
    },
    {
      title: "DeviceFusion",
      description:
        "DeviceFusion highlights the seamless fusion of the user's identity with their device. By integrating biometric data and device identity, it creates a secure, unified, and streamlined authentication process.",
      image: deviceFusionImg,
      reverse: true, // Image on the left
    },
    {
      title: "CoreFrame",
      description:
        "CoreFrame conveys the concept of a secure and fortified core protecting the foundation of AuthnPay. This robust structure ensures stability, encryption, and enhanced security for the platform's operations.",
      image: coreFrameImg,
      reverse: false, // Image on the right
    },
    {
      title: "QuickKey1",
      description:
        "QuickKey1 focuses on generating secure, dynamic keys in real time. It ensures rapid and secure access, making the process both efficient and robust.",
      image: quickKey1Img,
      reverse: true, // Image on the left
    },
    {
      title: "QuickKey2",
      description:
        "QuickKey2 adds an additional authentication layer by validating user interactions. It ensures reliable access control through multi-layered validation.",
      image: quickKey2Img,
      reverse: false, // Image on the right
    },
    {
      title: "QuickKey3",
      description:
        "QuickKey3 strengthens the authentication framework with its ability to adapt dynamically to security risks, ensuring top-level protection.",
      image: quickKey3Img,
      reverse: true, // Image on the left
    },
    {
      title: "GeoSecure",
      description:
        "GeoSecure adds an advanced layer of security by leveraging geographic location. It allows or restricts access based on the user's location, ensuring only authorized users can access sensitive systems.",
      image: geoSecureImg,
      reverse: false, // Image on the right
    },
  ];

  return (
    <section className="usai-section">
      <div className="usai-container">
        <h1 className="usai-heading">USAI Features</h1>
        {usaiData.map((item, index) => (
          <div
            className={`usai-item ${item.reverse ? "reverse" : ""}`}
            key={index}
          >
            <div className="usai-text">
              <h2 className="usai-title">{item.title}</h2>
              <p className="usai-description">{item.description}</p>
            </div>
            <div className="usai-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default USAI;
