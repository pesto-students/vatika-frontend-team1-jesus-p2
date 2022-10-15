import React from "react";
import { Form, Input } from "antd";
import { moreThenThreeAddress } from "./CheckoutAddressFunction";
import {
  fullNameRule,
  lastNameRule,
  addressRule,
  apartmentRule,
  cityRule,
  stateRule,
  pincodeRule,
} from "./AddressRule";

function SaveAddress({ onAddressSaveAPI, allAddress, form }) {
  return (
    <div className="leadDetails">
      <h2>or Add new address</h2>
      <Form
        autoComplete="off"
        onFinish={(values) => {
          if (allAddress.length === 3) {
            moreThenThreeAddress();
          } else {
            onAddressSaveAPI(values);
          }
        }}
        form={form}
      >
        <div className="fullName">
          <Form.Item name="firstName" rules={fullNameRule} hasFeedback>
            <Input placeholder=" First Name" className="firstName"></Input>
          </Form.Item>

          <Form.Item name="lastName" rules={lastNameRule} hasFeedback>
            <Input placeholder=" Last Name" className="lastName"></Input>
          </Form.Item>
        </div>

        <Form.Item name="address" rules={addressRule} hasFeedback>
          <Input placeholder=" Address" className="addressFld"></Input>
        </Form.Item>
        <Form.Item name="apartmentNo" rules={apartmentRule} hasFeedback>
          <Input
            placeholder=" Apartment / Suite Number"
            className="addressFld"
          ></Input>
        </Form.Item>

        <div className="city">
          <Form.Item name="city" rules={cityRule} hasFeedback>
            <Input placeholder=" City" className="cityFld"></Input>
          </Form.Item>
          <Form.Item name="state" rules={stateRule} hasFeedback>
            <Input placeholder=" State" className="cityFld"></Input>
          </Form.Item>
          <Form.Item name="pincode" rules={pincodeRule} hasFeedback>
            <Input
              controls={false}
              placeholder=" Pincode"
              className="cityFld"
            ></Input>
          </Form.Item>
        </div>

        <Form.Item>
          <button type="primary" className="save-button">
            Save
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SaveAddress;
