import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./Plant.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import Loading from "../Loading/Loading";

function Plant() {
  const product = useSelector((state) => state.product);
  const { products, cart } = useSelector((state) => state.allProducts);


  const { name } = useParams();
  const dispatch = useDispatch();
  // console.log(name);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`http://localhost:5000/product/${name}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data[0]));
  };

  console.log(product);

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
        <>
          <div className="back">
            <Link to="/product">
              <button>
                <ArrowLeftOutlined /> Back
              </button>
            </Link>
          </div>

          <div className="collection">
            <div className="bigImage">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="plant-details">
              <h1>{product.name}</h1>
              <h2>
                Rs {product.price}
                <del>Rs{product.price}</del>
              </h2>
              <p>Inclusive of all taxes</p>
              <h3>Quantity</h3>
              <div className="quantity">
                <PlusCircleOutlined className="quant-icon" />
                <h2>1</h2>
                <MinusCircleOutlined className="quant-icon" />
              </div>
              
              <button className="butOne b">Add to Cart </button>
              <button className="butTwo b">Buy Now</button>
              <hr />
              <div className="delivery">
                <h2>Check Delivery</h2>
                <input type="number" placeholder="Enter Pincode" />
                <button>Check</button>
              </div>
            </div>
          </div>

          <div className="about">
            <h1>About Plant</h1>
            <p>{product.description}</p>

            <img src={require("../../assets/drop.png")} alt="water" />
            <h3>Water Required {product.water} Day per Week</h3>

            <img src={require("../../assets/sun.png")} alt="sun" />
            <h3>Sunlight Required {product.sunlight} Hours per day</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Plant;
