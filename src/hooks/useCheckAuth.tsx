import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function useCheckAuth() {
  const [isAuthenticated, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({
    photoURL: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (response: any) => {
      if (response) {
        setUserData(response);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);
  return { isAuthenticated, userData };
}
