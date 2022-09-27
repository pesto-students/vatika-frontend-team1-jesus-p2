import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <>
    <div className='bg-color'></div>
    <nav class="navbar">
      <div className="left">
        <Link to="/">
          <img
            src={require("../../assets/logo.png")}
            alt="logo"
            className="logo"
          />
          <p>Vatika</p>
        </Link>
      </div>
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

      <div className="right">
        <HeartOutlined className="heart" />
        <Link to="/cart">
          <ShoppingCartOutlined className="cart" />
        </Link>
        <div className="bothButton">
        <button className="login" >Login</button>
        <button className="signup">SignUp</button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
