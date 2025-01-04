import React from "react";
import "../styles/SecurityCompliance.css";
import securityImage from "../assets/security.jpg";

const SecurityCompliance = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    "introduction",
    "security-objectives",
    "authentication",
    "physical-security",
    "access-control",
    "data-protection",
    "network-security",
    "monitoring",
    "incident-response",
    "regulatory-compliance",
    "awareness-training",
    "third-party-security",
    "secure-development",
    "vapt",
  ];

  return (
    <section className="security-compliance">
      <div className="header">
        <img src={securityImage} alt="Security" className="header-image" />
        <h1>Security & Compliance</h1>
      </div>
      <div className="content">
        {/* Left: Table of Contents */}
        <div className="toc">
          <h2>Table of Contents</h2>
          <ul>
            <li onClick={() => scrollToSection(sections[0])}>1. Introduction</li>
            <li onClick={() => scrollToSection(sections[1])}>2. Security Objectives</li>
            <li onClick={() => scrollToSection(sections[2])}>
              3. Authentication and Verification Mechanisms
            </li>
            <li onClick={() => scrollToSection(sections[3])}>4. Physical Security</li>
            <li onClick={() => scrollToSection(sections[4])}>5. Access Control</li>
            <li onClick={() => scrollToSection(sections[5])}>6. Data Protection</li>
            <li onClick={() => scrollToSection(sections[6])}>7. Network Security</li>
            <li onClick={() => scrollToSection(sections[7])}>8. Monitoring and Logging</li>
            <li onClick={() => scrollToSection(sections[8])}>9. Incident Response</li>
            <li onClick={() => scrollToSection(sections[9])}>
              10. Regulatory and International Compliance
            </li>
            <li onClick={() => scrollToSection(sections[10])}>
              11. Security Awareness and Training
            </li>
            <li onClick={() => scrollToSection(sections[11])}>12. Third-Party Security</li>
            <li onClick={() => scrollToSection(sections[12])}>
              13. Secure Development and Continuous Monitoring
            </li>
            <li onClick={() => scrollToSection(sections[13])}>
              14. Vulnerability Assessment and Penetration Testing (VAPT)
            </li>
          </ul>
        </div>

        {/* Right: Content */}
        <div className="details">
          <div id="introduction">
            <h2>1. Introduction</h2>
            <p>
              This document details the security protocols and international standards adherence
              for AuthnPay, including compliance with industry-recognized standards and government
              regulations.
            </p>
          </div>
          <div id="security-objectives">
            <h2>2. Security Objectives</h2>
            <p>
              AuthnPay is committed to ensuring the confidentiality, integrity, and availability of
              data, with robust authentication protocols for identity verification and payment
              security.
            </p>
          </div>
          <div id="authentication">
            <h2>3. Authentication and Verification Mechanisms</h2>
            <p>
              AuthnPay provides layered digital identity verification, single-click onboarding, and
              multi-factor authentication for payment processing, meeting regulatory and
              international compliance standards.
            </p>
          </div>
          <div id="physical-security">
            <h2>4. Physical Security</h2>
            <p>
              Physical infrastructure and device security ensure all hardware is protected with
              tamper-proof and access-controlled measures.
            </p>
          </div>
          <div id="access-control">
            <h2>5. Access Control</h2>
            <p>
              AuthnPay employs strict access controls for users and administrators, including
              role-based permissions and MFA.
            </p>
          </div>
          <div id="data-protection">
            <h2>6. Data Protection</h2>
            <p>
              All sensitive data is encrypted, compliant with data retention laws, and backed up
              securely.
            </p>
          </div>
          <div id="network-security">
            <h2>7. Network Security</h2>
            <p>
              A secure network environment is enforced with firewalls, SSL/TLS, and continuous
              monitoring to safeguard data in transit.
            </p>
          </div>
          <div id="monitoring">
            <h2>8. Monitoring and Logging</h2>
            <p>
              Event logging and regular audits are in place to meet transparency and traceability
              standards.
            </p>
          </div>
          <div id="incident-response">
            <h2>9. Incident Response</h2>
            <p>
              A comprehensive incident response plan ensures rapid reporting, handling, and
              containment of any security events.
            </p>
          </div>
          <div id="regulatory-compliance">
            <h2>10. Regulatory and International Compliance</h2>
            <ul>
              <li>ISO 27001: Certifies adherence to the highest standards of Information Security.</li>
              <li>ISO 27017: Reinforces cloud security for providers.</li>
              <li>
                ISO 27018: Demonstrates commitment to safeguarding personal data in cloud
                environments.
              </li>
              <li>
                SOC 2 Type 1: Ensures internal security controls meet service organization
                requirements.
              </li>
              <li>GDPR Compliance: Handles personal data lawfully and transparently.</li>
              <li>
                Compliance with NPCI, RBI, and TRAI Guidelines: Ensures payment and data protection.
              </li>
            </ul>
          </div>
          <div id="awareness-training">
            <h2>11. Security Awareness and Training</h2>
            <p>
              Regular security training is provided to employees and customers to foster a culture
              of awareness and compliance with best security practices.
            </p>
          </div>
          <div id="third-party-security">
            <h2>12. Third-Party Security</h2>
            <p>
              Vendors undergo thorough security assessments to ensure their compliance with
              AuthnPay’s standards, and all agreements mandate security measures for customer data.
            </p>
          </div>
          <div id="secure-development">
            <h2>13. Secure Development and Continuous Monitoring</h2>
            <p>
              AuthnPay practices secure coding across all stages of development, with continuous
              monitoring of system components and regular updates to patch vulnerabilities as they
              arise.
            </p>
          </div>
          <div id="vapt">
            <h2>14. Vulnerability Assessment and Penetration Testing (VAPT)</h2>
            <p>
              Quarterly VAPT is performed to identify and address security vulnerabilities,
              adhering to international standards and regulatory guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
