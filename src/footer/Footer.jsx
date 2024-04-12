// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/Aptitude" className="footer-link">Aptitude</Link>
        <Link to="/About" className="footer-link">About Us</Link>
        <Link to="/Contact" className="footer-link">Contact</Link>
        <Link to="/FormBox" className="footer-link">Login</Link>
      </div>
      <div className="footer-info">
        <p>&copy; 2022 Quizon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
