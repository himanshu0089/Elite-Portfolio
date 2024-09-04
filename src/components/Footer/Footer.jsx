import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="footer">
      <div className="title">
        <h2>Connect me through</h2>
      </div>
      <div className="footer-links">
        <Link to="https://github.com/himanshu0089" className="refs"><img src={assets.twitter_icon} alt="" /></Link>
        <Link to="https://www.linkedin.com/in/himanshu0089/" className="refs"><img src={assets.linkedin_icon} alt="" /></Link>
        <Link to="https://github.com/himanshu0089" className="refs"><img src={assets.facebook_icon} alt="" /></Link>
      </div>

      <div className="signature">
        {" "}
        <h3>Designed by Pir@te</h3>
      </div>
    </div>
  );
}

export default Footer;
