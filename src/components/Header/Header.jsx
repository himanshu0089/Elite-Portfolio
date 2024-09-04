import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="navbar">
      <div className="header">
        <div className="heading">
          <Link to="/"><h2>Walk the Talk</h2></Link>
        </div>
        <div className="profile">
          <img src={assets.profile_icon} alt="" />
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/" className="ref">home</Link>
        <Link to="/project" className="ref" id="project">projects</Link>
        <Link to="https://medium.com/@nonuroy0089/cryptocurrency-92a11aa10860" className="ref">blogs</Link>
        <Link to="/contact" className="ref">contact-us</Link>
        <Link to="/about" className="ref">about</Link>
      </div>
    </div>
  )
}

export default Header;
