import React from "react";
import "./Recharge.css";
import RechargeButton from "../Button/RechargeButton";
import BorderedButton from "../Button/BorderedButton";
import Calender from "../../assets/Vector(3).png";

const Recharge = () => {
  return (
    <div className="recharge-container">
      <h2 className="recharge-banner">Recharge </h2>
      <div className="recharge-cont">
        <p>Select recharge type</p>
        <RechargeButton
          buttonText="Instant Recharge"
          backgroundColor="rgba(235, 106, 43, 0.1)"
          Color="#124A80"
          width="264px"
        />
        <RechargeButton
          buttonText="Schedule Recharge"
          backgroundColor="#124A80"
          Color="white"
          width="264px"
          marginTop="10px"
        />
        <p className="select-date">Select Date & Time</p>
        <div className="date">
          <img src={Calender} alt="Calender" />
          <p>1 Sep 2021, 11:43 AM</p>
        </div>

        <RechargeButton
          buttonText="Auto Recharge"
          backgroundColor="rgba(235, 106, 43, 0.1)"
          Color="#124A80"
          width="264px"
          marginTop="10px"
        />
        <div className="button-cont">
          <BorderedButton
            buttonText="Back"
            Color="#EB6A2B"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            width="115px"
            marginTop="66px"
            fontWeight="700"
          />
          <BorderedButton
            buttonText="Next"
            Color="#FFFFFF"
            backgroundColor="#EB6A2B"
            width="115px"
            marginTop="66px"
            fontWeight="700"
            marginLeft="36px"
          />
        </div>
      </div>
    </div>
  );
};

export default Recharge;
