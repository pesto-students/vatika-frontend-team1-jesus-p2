import React from "react";
import { Checkbox } from "antd";
import Search from "antd/lib/transfer/search";

const onSearch = (value) => console.log(value);

function Product() {
  return (
    <div className="product">
      <div className="bg-color"></div>
      <div className="heading-product"></div>

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

      <div className="search">
      <Search placeholder="search" onSearch={onSearch} className='search-input' />
      </div>
    </div>
  );
}

export default Product;
