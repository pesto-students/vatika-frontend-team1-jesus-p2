import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  // const { cart } = useSelector((state) => state.allProducts);
  const {cart}=useSelector((state)=>state.cart);

  return (
    <>
      <div className="bg-color"></div>
      <nav className="navbar">
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
            <Badge className="badge" count={cart.length} />
          </Link>
          <button className="signup">Signup</button>
          <button className="login">Login</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
