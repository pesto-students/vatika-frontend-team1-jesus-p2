import React, { useState } from "react";
import { HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/productActions";
import { transformProduct, added, removed } from "./CardFunctions";
import Pagination from "./Pagination";
import { Spin } from "antd";

function Card() {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.allProducts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const filterProduct = transformProduct(filter, products);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        color: "#208854",
        marginLeft: "500px",
        marginTop: "200px",
      }}
      spin
    />
  );

  const renderProducts = filterProduct
    .slice(firstPostIndex, lastPostIndex)
    .map((product) => {
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
              <del>Rs {product.price + 20}</del>
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
      {products.length > 0 ? (
        <>
          <section>{renderProducts}</section>
          <Pagination
            totalPosts={filterProduct.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Spin className="spin" indicator={antIcon} />
      )}
    </>
  );
}

export default Card;
