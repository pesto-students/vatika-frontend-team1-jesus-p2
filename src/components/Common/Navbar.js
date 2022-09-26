import { HeartOutlined,ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div className="left">
        <img src={require("../../assets/logo.png")} alt="logo" className="logo" />
        <p>Vatika</p>
      </div>
      <div className="mid">
        <ul>
        <li><Link to="/" className="navlink">Home</Link></li>
        
        <li><Link to="/product" className="navlink">Product</Link></li>
        <li><Link to="/blog" className="navlink">Blog</Link></li>
        <li><Link to="/aboutus" className="navlink">AboutUs</Link></li>
        </ul>
      </div>

      <div className="right">
      <HeartOutlined className="heart"/>
      <ShoppingCartOutlined className="cart"/>
        <button>Login/Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
