import React from "react";
import { added, removed } from "../Product/CardFunctions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/actions/productActions";

function PlantDetails({ product, cart }) {
  const dispatch = useDispatch();

  function buyNow() {
    if (cart.filter((prod) => prod.name === product.name).length === 0)
      dispatch(addToCart(product));
  }

  return (
    <div className="plant-details">
      <h1>{product.name}</h1>
      <h2>
        Rs {product.price}
        <del>Rs{product.price}</del>
      </h2>
      <p>Inclusive of all taxes</p>
      <Link to="/cart">
        <button className="butTwo b" onClick={() => buyNow()}>
          Buy Now
        </button>
      </Link>

      {cart.filter((prod) => prod.name === product.name).length > 0 ? (
        <button
          className="butROne b"
          onClick={() => {
            removed();
            dispatch(removeFromCart(product));
          }}
        >
          Remove
        </button>
      ) : (
        <>
          <button
            className="butOne b"
            onClick={() => {
              added();
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </button>
        </>
      )}

      <hr />
      <div className="delivery">
        <h2>Check Delivery</h2>
        <input type="number" placeholder="Enter Pincode" />
        <button>Check</button>
      </div>
    </div>
  );
}

export default PlantDetails;
