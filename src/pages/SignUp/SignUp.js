import React from "react";
import "./SignUp.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Rectangle from "../../assets/Rectangle 6.png";
import RectangleBox from "../../assets/Rectangle 25.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="SignUpContainer">
        <div className="SignUpForm">
          <h2>Create an account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <Button
            buttonText="Sign Up"
            marginTop="50px"
            Color="white"
            backgroundColor="#EB6A2B"
            height="66px"
          />
          <p>
            Already have an account?<Link to="/signin"> Sign in</Link>
          </p>
        </div>
        <img src={Rectangle} alt="Sign In Picture" className="SignUppicture" />
        <img
          src={RectangleBox}
          alt="Sign In Picture"
          className="RectangleBox"
        />
      </div>
    </div>
  );
};

export default SignUp;
