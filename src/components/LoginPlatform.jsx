import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPlatform.css";
import platformGroups from "./platformGroupsData";

const LoginPlatform = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Alphabetically sort groups and services
  const sortedPlatformGroups = platformGroups
    .map((group) => ({
      ...group,
      services: group.services.sort((a, b) =>
        a.name.localeCompare(b.name) // Sort services alphabetically
      ),
    }))
    .sort((a, b) => a.groupName.localeCompare(b.groupName)); // Sort groups alphabetically

  // Filter groups and services dynamically based on search query
  const filteredGroups = sortedPlatformGroups.filter(
    (group) =>
      group.groupName.toLowerCase().includes(searchQuery.toLowerCase()) || // Check if group name matches query
      group.services.some((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) // Check if any service matches query
      )
  );

  const handleServiceClick = () => {
    navigate("/comingsoon"); // Navigates to the ComingSoon component
  };

  return (
    <section className="login-platform">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search groups or services"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="platform-groups">
        {filteredGroups.map(
          (group, index) =>
            group.services.length > 0 && (
              <div key={index} className="platform-group">
                <h2 className="group-title">{group.groupName}</h2>
                <div className="services-container">
                  {group.services.map((service, i) => (
                    <div
                      key={i}
                      className="service"
                      onClick={handleServiceClick}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={service.icon}
                        alt={service.name}
                        className="service-icon"
                      />
                      <p className="service-name">{service.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default LoginPlatform;
