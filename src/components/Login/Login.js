import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../redux/actions/productActions";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = ({ handleLoginCancel, showSignUpModal }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const url = process.env.REACT_APP_LOGIN;
      const response = await axios.post(url, values);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      setMessage(response.data.message);

      if (response.status === 200) {
        handleLoginCancel();
        dispatch(userLoggedIn());
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left-login" style={{ width: "900px" }}>
            <div className="loginComp">
              <h1 style={{ fontSize: "35px" }}>Login to Your Account</h1>
              <LoginForm
                handleSubmit={handleSubmit}
                message={message}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          </div>

          <div className="right-login">
            <h1>New Here ?</h1>
            <button
              type="button"
              className="white_btn"
              style={{ color: "#208854", background: "white" }}
              onClick={() => {
                handleLoginCancel();
                showSignUpModal();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
