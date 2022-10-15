import axios from "axios";
import React, { useEffect } from "react";
import "./Plant.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import Loading from "../Loading/Loading";
import PlantSection from "./PlantSection";

function Plant() {
  const product = useSelector((state) => state.product);

  const { name } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_PRODUCT}/${name}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (name && name !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [name]);

  return (
    <div className="plant">
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <PlantSection product={product} />
      )}
    </div>
  );
}

export default Plant;
