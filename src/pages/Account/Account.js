import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import JumpingMan from "../../assets/Rectangle 7.png";
// import { useHistory } from 'react-router-dom';
import "./Account.css";
import Rectangle from "../../assets/Rectangle 25.png";

const Account = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="success-content">
          <h3>Account Created</h3>
          <p>
            You’ve successfully created and account with OneCard. Kindly
            complete your profile to gain full access to all services
          </p>
          <button> Back Home </button>
          <Button
            buttonText="Go to Dashboard"
            width="501px"
            Color="White"
            backgroundColor="#EB6A2B"
            marginTop="20px"
          />
        </div>
        <div className="account-image">
          <img src={JumpingMan} alt="successful customer happy" />
          <p className="small-box"></p>
          <img src={Rectangle} alt="Rectangle" className="SuccessRetangle" />
        </div>
      </div>
    </div>
  );
};

export default Account;
