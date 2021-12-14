import React from "react";
import RechargeButton from "../../components/Button/RechargeButton";
import BorderedButton from "../../components/Button/BorderedButton";
import AppLayout from "../../layouts/appLayout";
import "./Fund.css";

const Fund = () => {
  return (
    <AppLayout pageTitle="Fund Wallet">
      <div className="fund-body">
        <div>
          <h2 className="recharge-banner">Enter Amount</h2>
          <div className="amount-container">
            <p>Available Balance</p>
            <h2>NGN 674,987,675</h2>
            <label>Enter Amount</label>
            <input type="text" placeholder="NGN 200,000,000" />
            <RechargeButton
              buttonText="Next"
              backgroundColor="#EB6A2B"
              Color="white"
              marginTop="51px"
              width="115px"
            />
          </div>
        </div>
        <div>
          <h2 className="recharge-banner">Payment Method</h2>
          <div className="payment-container">
            <RechargeButton
              buttonText="OneCard Recharge PIN"
              backgroundColor="rgba(235, 106, 43, 0.1)"
              Color="#124A80"
              width="263px"
            />
            <RechargeButton
              buttonText="Debit Card"
              backgroundColor="#124A80"
              Color="#fff"
              marginTop="10px"
              width="263px"
            />
            <RechargeButton
              buttonText="Others"
              backgroundColor="rgba(235, 106, 43, 0.1)"
              Color="#124A80"
              marginTop="10px"
              width="263px"
            />
            <div className="fund-button">
              <BorderedButton
                buttonText="Back"
                Color="#EB6A2B"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                marginTop="66px"
                fontWeight="700"
                width="115px"
              />
              <BorderedButton
                buttonText="Next"
                Color="#FFFFFF"
                backgroundColor="#EB6A2B"
                marginTop="66px"
                fontWeight="700"
                marginLeft="36px"
                width="115px"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="recharge-banner">Debit Card</h2>
          <div className="debit-container"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Fund;
