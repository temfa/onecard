import React from "react";
import "./SignUp.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Rectangle from "../../assets/Rectangle 6.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="SignInContainer">
        <div className="SignInForm">
          <h2>Create an account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <Button
            buttonText="Sign Up"
            marginTop="50px"
            Color="white"
            backgroundColor="#EB6A2B"
            width="501px"
            height="66px"
          />
          <p>
            Already have an account?<Link to="/signin"> Sign in</Link>
          </p>
        </div>
        <img src={Rectangle} alt="Sign In Picture" />
      </div>
    </div>
  );
};

export default SignUp;
