import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu } from "antd";
import { userLoggedIn } from "../../../redux/actions/productActions";
import "./Navbar.css";
import NavbarMidSection from "./NavbarMidSection";
import NavbarEndSection from "./NavbarEndSection";

function Navbar() {
  const dispatch = useDispatch();

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <span
              onClick={() => {
                dispatch(userLoggedIn(false));
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
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
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/logo_lcxupl.png"
              alt="logo"
              className="logo"
            />
            <p>Vatika</p>
          </Link>
        </div>

        <NavbarMidSection />
        <NavbarEndSection menu={menu} />
      </nav>
    </>
  );
}

export default Navbar;
