import React from "react";
import "./SignIn.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Rectangle from "../../assets/Rectangle 6(1).png";
import RectangleBox from "../../assets/Rectangle 25.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="SignInContainer">
        <div className="SignInForm">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <p className="Reset">
            Forgot password? <Link to="/signin"> Reset</Link>
          </p>
          <Button
            buttonText="Sign In"
            marginTop="50px"
            Color="white"
            backgroundColor="#EB6A2B"
            height="66px"
          />
          <p>
            Don’t have an account? <Link to="/signin"> Sign up</Link>
          </p>
        </div>
        <img src={Rectangle} alt="Sign In " className="SignInpicture" />
        <img src={RectangleBox} alt="Sign In " className="RectangleBox2" />
      </div>
    </div>
  );
};

export default SignUp;
