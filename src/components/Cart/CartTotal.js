import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartTotal({ cart, total }) {
  const grandTotal = useSelector((state) => state.cartTotal);

  return (
    <div>
      <div className="total">
        <h3>
          Subtotal<span>Rs {total}</span>
        </h3>
        <h3>
          Discount
          <span className="discount">
            {cart.length === 0 ? "Rs 0" : "Rs 10(-)"}
          </span>
        </h3>
        <h3>
          Delivery<span> Rs {cart.length === 0 ? "0" : "40"}</span>
        </h3>

        <div className="line"></div>
        <h2>
          Total
          <span>Rs {cart.length === 0 ? "0" : grandTotal.total + 30}</span>
        </h2>
      </div>
      {cart.length === 0 ? (
        <button className="shopping">Continue Shopping</button>
      ) : (
        <>
          <Link to="/payment">
            <button className="checkout">Process to Checkout</button>
          </Link>
          <Link to="/product">
            <button className="shopping">Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartTotal;
