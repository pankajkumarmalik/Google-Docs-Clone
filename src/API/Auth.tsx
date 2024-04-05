import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

let provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider).then((response) => {
    const user = response.user;
  });
};
