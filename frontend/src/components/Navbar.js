import React from "react";
import { Link } from "react-router-dom";   // ✅ import
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/Jobs">Jobs</Link></li>
        <li><Link to="/hire">HireBlu</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
