import React,{useState} from "react";
import { Modal } from "antd";

import Signup from "../../Signup/Signup";
import Login from "../../Login/Login";

function NavLoginSignUp() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginUpModalOpen, setIsLoginModalOpen] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalOpen(false);
  };

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };
  return (
    
      <>
        <button className="signup" onClick={showSignUpModal}>
          Signup
        </button>
        <Modal
          open={isSignUpModalOpen}
          footer={null}
          bodyStyle={{ height: 0, width: 0 }}
          onCancel={handleSignUpCancel}
        >
          <div className="wrapper">
            <Signup
              handleSignUpCancel={handleSignUpCancel}
              showLoginModal={showLoginModal}
            />
          </div>
        </Modal>

        <button className="login" onClick={showLoginModal}>
          Login
        </button>
        <Modal
          open={isLoginUpModalOpen}
          footer={null}
          bodyStyle={{ height: 0, width: 0 }}
          onCancel={handleLoginCancel}
        >
          <Login
            handleLoginCancel={handleLoginCancel}
            showSignUpModal={showSignUpModal}
          />
        </Modal>
      </>
    
  );
}

export default NavLoginSignUp;
