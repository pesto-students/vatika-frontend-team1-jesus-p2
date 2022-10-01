import React from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  inccQuantity,
  removeFromCart,
  descQuantity,
} from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Step } = Steps;

function Cart() {
  const cart = useSelector((state) => state.allProducts.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  console.log(cart);

  const deleteItem = () => {
    toast.error("Item Deleted", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    });
  };

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
        {/* process wait finish  */}
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

              {cart.map((plant) => (
                <div className="item" key={plant._id}>
                  <div className="plant-image">
                    <img src={plant.image} alt={plant.name} />
                  </div>
                  <div className="pot">
                    <h2>{plant.name}</h2>
                    <p>Pot Color</p>
                    <input
                      type="radio"
                      className="redRadio"
                      id="red"
                      name="radio-button"
                    />
                    <label htmlFor="red">Red</label>
                    <input
                      type="radio"
                      className="blackRadio"
                      id="black"
                      name="radio-button"
                    />
                    <label htmlFor="black">Black</label>
                    <input
                      type="radio"
                      className="greenRadio"
                      id="white"
                      name="radio-button"
                    />
                    <label htmlFor="green">Green</label>
                  </div>
                  <div className="quantity">
                    <PlusCircleOutlined
                      className="quant-icon"
                      onClick={() => {
                        dispatch(inccQuantity(plant));
                      }}
                    />
                    <h2>{plant.qty}</h2>
                    <MinusCircleOutlined
                      className="quant-icon"
                      onClick={() => {
                        dispatch(descQuantity(plant));
                      }}
                    />
                  </div>
                  <div className="rate">
                    <h2>Rs {plant.price * plant.qty}</h2>
                    <button
                      onClick={() => {
                        deleteItem();
                        dispatch(removeFromCart(plant));
                      }}
                    >
                      <DeleteOutlined /> Delete
                    </button>
                  </div>
                </div>
              ))}

              <div className="totalItem">
                <div className="endLine"></div>
                <h2>Total {cart.length} Items</h2>
              </div>
            </div>
          </div>

          <div className="summary">
            <h1>Summary</h1>
            <div>
              <input type="text" placeholder="Promocode" />
              <button className="apply">Apply</button>
            </div>
            <div>
              <input type="radio" name="promo" id="first" />
              <label htmlFor="first">LUCKYUSER</label>
            </div>
            <div>
              <input type="radio" name="promo" id="first" />
              <label htmlFor="first">FIRST50</label>
            </div>
            <div className="line"></div>
            <div className="total">
              <h3>
                Subtotal <span>Rs {total}</span>
              </h3>
              <h3>
                Discount <span>Rs {cart.length === 0 ? "0" : "10"}</span>
              </h3>
              <h3>
                Delivery <span> Rs {cart.length === 0 ? "0" : "40"}</span>
              </h3>

              <div className="line"></div>
              <h2>
                Total <span>Rs {cart.length === 0 ? "0" : total + 30}</span>
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
            {/* <button className="checkout">Process to Checkout</button>
            <button className="shopping">Continue Shopping</button> */}
          </div>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Cart;
