import { useState } from "react";
import axios from "axios";
import { Form } from "antd";
import "./Signup.css";
import SignupForm from "./SignupForm";

const Signup = ({ handleSignUpCancel, showLoginModal }) => {
  const [form] = Form.useForm();

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const url = process.env.REACT_APP_SIGNUP;
      const response = await axios.post(url, values);
      setLoading(false);
      setResponseMessage(response.data.message);

      if (response.status === 201) {
        form.resetFields();
      }
    } catch (err) {
      setLoading(false);
      setResponseMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left-signUp">
            <h1>Have an Account</h1>
            <button
              type="button"
              className="white_btn"
              style={{ color: "#208854" }}
              onClick={() => {
                handleSignUpCancel();
                showLoginModal();
              }}
            >
              Login
            </button>
          </div>

          <div className="right-signUp">
            <SignupForm
              handleSubmit={handleSubmit}
              form={form}
              loading={loading}
              setLoading={setLoading}
              responseMessage={responseMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
