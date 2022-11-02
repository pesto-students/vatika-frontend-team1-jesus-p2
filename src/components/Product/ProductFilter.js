import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "antd";
import {
  clearFilter,
  filterByGarden,
  filterByInterior,
  filterByOffice,
} from "../../redux/actions/productActions";

function ProductFilter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
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
  );
}

export default ProductFilter;
