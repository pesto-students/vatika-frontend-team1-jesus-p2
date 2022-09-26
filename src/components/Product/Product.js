import React from "react";
import { Checkbox } from "antd";
import Search from "antd/lib/transfer/search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Card from "./Card";

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Price Low to High
          </a>
        ),
        key: "0",
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Price High to Low
          </a>
        ),
        key: "1",
      },
    ]}
  />
);

const onSearch = (value) => console.log(value);

function Product() {
  return (
    <div className="product">
      <div className="bg-color"></div>
      <div className="heading-product"></div>
      <div className="all-section">
        <div className="main-filter">
          <div className="filter">
            <h2>Filter</h2>
            <h3>Category</h3>
            <Checkbox>For Garden</Checkbox>
            <Checkbox>For Interior</Checkbox>
            <Checkbox>For Office</Checkbox>
            <hr />
            <h3>Maintenance</h3>
            <Checkbox>Low</Checkbox>
            <Checkbox>Moderate</Checkbox>
            <Checkbox>High</Checkbox>
            <hr />
            <h3>Price</h3>
            <Checkbox>Less then Rs100</Checkbox>
            <Checkbox>Between Rs100 - Rs200</Checkbox>
            <Checkbox>More then Rs200</Checkbox>
            <hr />
            <button>Clear All</button>
          </div>
        </div>
        <div className="right-section">
          <div className="search">
            <Search
              className="searchInput"
              placeholder="Search"
              onSearch={onSearch}
            />
            <Dropdown className="dropDown" overlay={menu}>
              <a onClick={(e) => e.preventDefault()} href="/">
                <Space>
                  Sort by
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <Card/>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
