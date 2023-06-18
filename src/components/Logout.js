import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //gogle
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>Goole logout</button>
    </div>
  );
};

export default Logout;
