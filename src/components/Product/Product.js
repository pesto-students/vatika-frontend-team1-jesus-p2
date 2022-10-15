import React, { useEffect } from "react";
import Search from "antd/lib/transfer/search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "./Product.css";
import Card from "./Card";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  setProducts,
  filterBySearch,
  sortByPrice,
} from "../../redux/actions/productActions";
import ProductFilter from "./ProductFilter";

function Product() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(process.env.REACT_APP_PRODUCTS)
      .catch((err) => console.log("Error", err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <button
              onClick={() => {
                dispatch(sortByPrice("lowToHigh"));
              }}
            >
              Price Low to High
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              onClick={() => {
                dispatch(sortByPrice("highToLow"));
              }}
            >
              Price High to Low
            </button>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="product">
      <div className="heading-product"></div>
      <div className="all-section">
        <div className="main-filter">
          <ProductFilter />
        </div>
        <div className="right-section">
          <div className="search">
            <Search
              className="searchInput"
              placeholder="Search"
              onChange={(e) => {
                dispatch(filterBySearch(e.target.value));
              }}
            />
            <Dropdown className="dropDown" overlay={menu}>
              <Space>
                Sort by
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Product;
