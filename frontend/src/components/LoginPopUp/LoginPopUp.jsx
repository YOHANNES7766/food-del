/* eslint-disable */
import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="text" placeholder="Your email" required />
          <input type="text" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")}>
            Create a new account? <span>Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")}>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
