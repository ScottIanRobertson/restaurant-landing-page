import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com/" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Our Restaurant. All rights reserved.</p>
      </div>
    </footer >
  );
};

export default Footer;
