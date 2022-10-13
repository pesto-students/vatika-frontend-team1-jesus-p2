import React from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Space, Avatar } from "antd";
import NavLoginSignUp from "./NavLoginSignUp";

function NavbarEndSection({ menu }) {
  const { cart } = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);

  return (
    <div>
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
                className="userIcon"
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
              <DownOutlined className="downArrow" />
            </Space>
          </Dropdown>
        ) : (
          <NavLoginSignUp />
        )}
      </div>
    </div>
  );
}

export default NavbarEndSection;
