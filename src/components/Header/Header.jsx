import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div>
      <header>
        <div className="heading">
          <h2>Walk the Talk</h2>
        </div>

        <div className="links">
        <Link to="/" className="ref">Home</Link>
          <Link to="/project" className="ref">Project</Link>
          <Link to="/blog" className="ref">Blogs</Link>
          <Link to="/about" className="ref">About</Link>
          < br/>
          
        </div>
        <div className="Search">
          <h3>Search</h3>
          <img src={assets.search_icon} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
