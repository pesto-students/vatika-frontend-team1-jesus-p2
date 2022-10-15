import React, { useState, useEffect } from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import PromoCode from "./PromoCode";
import CartTotal from "./CartTotal";

const { Step } = Steps;

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const setAndDispatchTotal = () => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    dispatch(cartTotal({ total: total }));
  };

  useEffect(() => {
    setAndDispatchTotal();
  }, [cart, total]);

  return (
    <>
      <div className="cart">
        <div className="back">
          <Link to="/product">
            <button>
              <ArrowLeftOutlined /> Back
            </button>
          </Link>
        </div>
        <Steps className="steps">
          <Step status="process" title="Cart" icon={<ShoppingCartOutlined />} />
          <Step status="wait" title="Payment" icon={<AlipayCircleOutlined />} />
          <Step
            status="wait"
            title="Confirmation"
            icon={<CheckCircleOutlined />}
          />
        </Steps>
        <div className="side-by-side">
          <div>
            <div className="plants">
              <h1>Cart</h1>

              <CartItem cart={cart} />

              <div className="totalItem">
                <div className="endLine"></div>
                <h2>Total {cart.length} Items</h2>
              </div>
            </div>
          </div>

          <div className="summary">
            <h1>Summary</h1>
            <PromoCode />
            <div className="line"></div>
            <CartTotal cart={cart} total={total} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
