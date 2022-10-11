import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Badge, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import { Dropdown, Menu, Space, Avatar } from "antd";
import { userLoggedIn } from "../../redux/actions/productActions";

function Navbar() {
  const { cart } = useSelector((state) => state.cart);

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginUpModalOpen, setIsLoginModalOpen] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalOpen(false);
  };

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <span
              onClick={() => {
                dispatch(userLoggedIn());
              }}
            >
              Logout
            </span>
          ),
        },
      ]}
    />
  );

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

          {login.isLogin ? (
            <Dropdown overlay={menu}>
              <Space>
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                />
                <DownOutlined className="downArrow" />
              </Space>
            </Dropdown>
          ) : (
            <>
              <button className="signup" onClick={showSignUpModal}>
                Signup
              </button>
              <Modal
                open={isSignUpModalOpen}
                footer={null}
                bodyStyle={{ height: 0, width: 0 }}
                onCancel={handleSignUpCancel}
              >
                <div className="wrapper">
                  <Signup
                    handleSignUpCancel={handleSignUpCancel}
                    showLoginModal={showLoginModal}
                  />
                </div>
              </Modal>

              <button className="login" onClick={showLoginModal}>
                Login
              </button>
              <Modal
                open={isLoginUpModalOpen}
                footer={null}
                bodyStyle={{ height: 0, width: 0 }}
                onCancel={handleLoginCancel}
              >
                <Login
                  handleLoginCancel={handleLoginCancel}
                  showSignUpModal={showSignUpModal}
                />
              </Modal>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
