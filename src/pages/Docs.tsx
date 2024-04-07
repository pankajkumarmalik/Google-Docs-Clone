import React from "react";
import ButtonComponent from "../components/button";
import { loginWithGoogle } from "../api/Auth";
import useCheckAuth from "../hooks/useCheckAuth";
import TopBar from "../components/topBar";
import Document from "../components/document";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };

  let { isAuthenticated, userData } = useCheckAuth();
  console.log(userData);

  return (
    <div>
      {!isAuthenticated ? (
        <ButtonComponent
          title="Login With Google"
          handleLogin={handleLogin}
        ></ButtonComponent>
      ) : (
        <>
          <Document photoURL={userData?.photoURL} />
        </>
      )}
    </div>
  );
};

export default Docs;
