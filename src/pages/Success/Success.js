import React from "react";
import OrangeButton from "../../components/Button/OrangeButton";
import Header from "../../components/Header/Header";
import JumpingMan from "../../assets/success.png";
// import { useHistory } from 'react-router-dom';
import "./Success.css";
import Rectangle from "../../assets/Rectangle 25.png";

const Success = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="success-content">
          <h3>Recharge Successful</h3>
          <p>
            Your recharge was successful with OneCard. Kindly signup to unlock
            more services and rewards
          </p>
          <OrangeButton
            buttonText={`Save ${localStorage.recipient} to Beneficiaries`}
          />
        </div>
        <div className="success-image">
          <img src={JumpingMan} alt="successful customer happy" />
          <p className="small-box"></p>
          <img src={Rectangle} alt="Rectangle" className="SuccessRetangle" />
        </div>
      </div>
    </div>
  );
};

export default Success;
