import React from "react";
import ModalComponent from "../components/Modal";
import { loginWithGoogle } from "../API/Auth";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };
  return (
    <div>
      <ModalComponent
        title="Login With Google"
        handleLogin={handleLogin}
      ></ModalComponent>
    </div>
  );
};

export default Docs;
