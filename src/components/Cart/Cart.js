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

const { Step } = Steps;

function Cart() {
  return (
    <>
      <div className="bg-color"></div>
      <div className="cart">
        <div className="back">
          <button>
            <ArrowLeftOutlined /> Back
          </button>
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
              <div className="item">
                <div className="plant-image">
                  <img
                    src={require("../../assets/Deatiled-Image.png")}
                    alt="DealPlant1"
                  />
                </div>
                <div className="pot">
                  <h2>Money Plant</h2>
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
                  <PlusCircleOutlined className="quant-icon" />
                  <h2>1</h2>
                  <MinusCircleOutlined className="quant-icon" />
                </div>
                <div className="rate">
                  <h2>Rs 100</h2>
                  <button>
                    <DeleteOutlined /> Delete
                  </button>
                </div>
              </div>

              <div className="item">
                <div className="plant-image">
                  <img
                    src={require("../../assets/Deatiled-Image.png")}
                    alt="DealPlant1"
                  />
                </div>
                <div className="pot">
                  <h2>Money Plant</h2>
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
                  <PlusCircleOutlined className="quant-icon" />
                  <h2>1</h2>
                  <MinusCircleOutlined className="quant-icon" />
                </div>
                <div className="rate">
                  <h2>Rs 100</h2>
                  <button>
                    <DeleteOutlined /> Delete
                  </button>
                </div>
              </div>

              <div className="item">
                <div className="plant-image">
                  <img
                    src={require("../../assets/Deatiled-Image.png")}
                    alt="DealPlant1"
                  />
                </div>
                <div className="pot">
                  <h2>Money Plant</h2>
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
                  <PlusCircleOutlined className="quant-icon" />
                  <h2>1</h2>
                  <MinusCircleOutlined className="quant-icon" />
                </div>
                <div className="rate">
                  <h2>Rs 100</h2>
                  <button>
                    <DeleteOutlined /> Delete
                  </button>
                </div>
              </div>

              <div className="totalItem">
              <div className="endLine"></div>
                <h2>Total 7 Items</h2>
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
                SubTotal <span>Rs 400</span>
              </h3>
              <h3>
                Discount <span>Rs 50</span>
              </h3>
              <h3>
                Delivery <span>Rs 60</span>
              </h3>

              <div className="line"></div>
              <h2>
                Total <span>Rs 540</span>
              </h2>
            </div>

            <button className="checkout">Process to Checkout</button>
            <button className="shopping">Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
