import React from "react";
import { Checkbox } from "antd";
import Search from "antd/lib/transfer/search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Card from "./Card";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  setProducts,
  filterBySearch,
  sortByPrice,
  clearFilter,
  filterByGarden,
  filterByInterior,
  filterByOffice,
} from "../../redux/actions/productActions";

function Product() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  console.log("Filter:", filter);

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

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/product")
      .catch((err) => console.log("Error", err));
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div className="product">
      <div className="heading-product"></div>
      <div className="all-section">
        <div className="main-filter">
          <div className="filter">
            <h2>Filter</h2>
            <h3>Category</h3>
            <Checkbox
              onChange={() => {
                filter.toggle
                  ? dispatch(filterByGarden("garden"))
                  : dispatch(clearFilter());
              }}
              checked={filter.byGarden}
            >
              For Garden
            </Checkbox>
            <Checkbox
              onChange={() => {
                filter.toggle
                  ? dispatch(filterByInterior("interior"))
                  : dispatch(clearFilter());
              }}
              checked={filter.byInterior}
            >
              For Interior
            </Checkbox>
            <Checkbox
              onChange={() => {
                filter.toggle
                  ? dispatch(filterByOffice("office"))
                  : dispatch(clearFilter());
              }}
              checked={filter.byOffice}
            >
              For Office
            </Checkbox>
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
            <button
              onClick={() => {
                dispatch(clearFilter());
              }}
            >
              Clear All
            </button>
          </div>
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
