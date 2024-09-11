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
        <Link to="/" className="ref">Home</Link>
        <a href="#projects" className="ref">Projects</a>
        <a href="#about" className="ref">About</a>
        <a href="#contact" className="ref">Contact</a>
        <Link to="/blog" className="ref">Blogs</Link>
        
        
      </div>
    </div>
  )
}

export default Header;
