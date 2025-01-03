import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact */}
        <div className="footer-section">
          <h2 className="footer-logo">AuthnPay</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p><strong>Contact</strong></p>
          <a href="mailto:example@domain.com" className="footer-contact">example@domain.com</a>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#company">Company</a></li>
            <li><a href="#press">Lorem</a></li>
            <li><a href="#blog">Our Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to receive future updates</p>
          <div className="newsletter">
            <input type="email" placeholder="Email address" />
            <button type="submit">→</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#english">English</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#support">Support</a>
        </div>
        <div className="footer-bottom-right">
          <span>© 2025 AuthnPay. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
