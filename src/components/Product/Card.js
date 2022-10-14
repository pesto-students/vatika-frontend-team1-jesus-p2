import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/productActions";
import { transformProduct, added, removed } from "./CardFunctions";

function Card() {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.allProducts);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const renderProducts = transformProduct(filter, products).map((product) => {
    return (
      <div className="cards" key={product._id}>
        <Link to={`/product/${product.name}`}>
          <div className="image_box">
            <img src={product.image} alt={product.name} />
            <HeartOutlined className="imageHeart" />
          </div>
        </Link>
        <div className="details">
          <h3>{product.name}</h3>
          <p>
            Rs {product.price}
            <del>Rs {product.price}</del>
            {cart.some((p) => p.name === product.name) ? (
              <button
                className="removeButton"
                onClick={() => {
                  removed();
                  dispatch(removeFromCart(product));
                }}
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => {
                  added();
                  dispatch(addToCart(product));
                }}
              >
                Add
              </button>
            )}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <section>{renderProducts}</section>;
    </>
  );
}

export default Card;
