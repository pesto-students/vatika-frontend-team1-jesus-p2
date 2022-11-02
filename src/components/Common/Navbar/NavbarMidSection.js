import React from "react";
import { Link } from "react-router-dom";

function NavbarMidSection() {
  return (
    <div>
      <div className="mid">
        <ul>
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>

          <li>
            <Link to="/product" className="navlink">
              Product
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navlink">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="navlink">
              AboutUs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMidSection;
