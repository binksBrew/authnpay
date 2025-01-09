import React, { useState } from "react";
import "../styles/LoginPlatform.css";
import platformGroups from "./platformGroupsData";

const LoginPlatform = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter services dynamically based on search query
  const filteredGroups = platformGroups.map((group) => ({
    ...group,
    services: group.services.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <section className="login-platform">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here"
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
                    <div key={i} className="service">
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
