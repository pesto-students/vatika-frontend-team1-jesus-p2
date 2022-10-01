import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/productActions";

function Card() {
  const { products, cart } = useSelector((state) => state.allProducts);
  console.log("Cart:", cart);
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  const transformProduct = () => {
    let sortedProduct = products;


    if (filter.sort) {
        sortedProduct = sortedProduct.sort((a, b) =>
          filter.sort === "lowToHigh" ? a.price - b.price :b.price - a.price
        );
    }

    if (filter.category) {
      sortedProduct = sortedProduct.filter(
        (prod) => prod.category === filter.category
      );
    }

    if (filter.searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(filter.searchQuery)
      );
      
    }
    return sortedProduct;
  };

  const renderProducts = transformProduct().map((product) => {
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
                  dispatch(removeFromCart(product));
                }}
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => {
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

  return <section>{renderProducts}</section>;
}

export default Card;
