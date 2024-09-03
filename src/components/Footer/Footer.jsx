import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
      <div>
        <h2>Connect me through</h2>
      </div>
      <div>
        <Link className="ref">Github</Link>
        <Link className="ref">Linkedin</Link>
      </div>

      <div className="signature">
        {" "}
        <h3>Designed by Pir@te</h3>
      </div>
      </footer>
    </div>
  );
}

export default Footer;
