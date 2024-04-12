// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import "./Nav.css";

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav>
      <div className="navbar-logo">
        <Link to="/">
          <p className="logo">Quiz<span>on</span></p>
        </Link>
      </div>
      <div className="menu_icon" onClick={toggleSidebar}>
        <RiMenu3Fill />
      </div>
      <ul className={`ul ${showSidebar ? 'show' : ''}`}>
        <li>
          <Link to="/"  className="link">Home</Link>
        </li>
        <li>
          <Link to="/Aptitude" className="link">Aptitude</Link>
        </li>
        <li>
          <Link to="/About" className="link">About Us</Link>
        </li>
        <li>
          <Link to="/Contact" className="link">Contact</Link>
        </li>
        <li>
          <Link to="/FormBox" className="link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
