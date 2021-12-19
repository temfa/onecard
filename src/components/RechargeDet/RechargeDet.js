import React, { useState } from "react";
import "./RechargeDet.css";
import Providers from "../../utils/providers";
import axios from "axios";
import OrangeButton from "../../components/Button/OrangeButton";

const RechargeDet = (props) => {
  const [activeService, setActiveService] = useState("Data");
  const [activeProvider, setActiveProvider] = useState("MTN-AIRTIME");
  const [providers] = useState(Providers);
  const [recipient, updateRecipient] = useState("");
  const [cost, updateCost] = useState("");
  const [loadingBar, setLoadingBar] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const activeServiceHandler = (service) => setActiveService(service);
  const activeProviderHandler = (provider) => setActiveProvider(provider);
  const recipientHandler = (num) => {
    if (num.length <= 11) updateRecipient(num);
  };
  const costHandler = (num) => {
    updateCost(num);
  };

  const rechargeHandler = (e) => {
    e.preventDefault();
    setLoadingBar(true);

    validateInput();

    const rechargeData = {
      serviceCode: activeProvider,
      recipient: recipient,
      serviceCost: cost,
      redirectUrl: window.location.origin + "/success",
    };

    if (formIsValid) {
      axios
        .post(
          "https://onecard.factorialsystems.io/api/v1/recharge",
          rechargeData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          updateRecipient("");
          updateCost("");
          setLoadingBar(false);
          window.location.href = res.data.authorizationUrl;
        })
        .catch((err) => {
          setLoadingBar(false);
        });
    } else {
      setErrorMsg("Please check your input and try again!");
      setTimeout(() => {
        setErrorMsg(null);
        setLoadingBar(false);
      }, 2000);
    }
  };

  const validateInput = () => {
    localStorage.recipient = recipient;

    if (!recipient || !cost) {
      setFormIsValid(false);
    } else {
      // if (recipient[0] !== '0') updateRecipient('0'+recipient)
      if ("0" + recipient.length < 11 || cost.length < 2) {
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
    }

    updateRecipient("");
    updateCost("");
  };
  return (
    <div>
      <h2 className="recharge-banner">Recharge Details</h2>
      <div className="recharge-details">
        <form className="qr-content" onSubmit={rechargeHandler}>
          <div className="qr-options">
            <p>What would you like to do?</p>
            <ul className="options-list">
              <li
                className={activeService === "Data" ? "active" : ""}
                onClick={() => activeServiceHandler("Data")}
              >
                <div>
                  <span className="material-icons">wifi</span>
                  <span>Data</span>
                </div>
              </li>
              <li
                className={activeService === "Airtime" ? "active" : ""}
                onClick={() => activeServiceHandler("Airtime")}
              >
                <div>
                  <span className="material-icons">phone_in_talk</span>
                  <span>Airtime</span>
                </div>
              </li>
              <li
                className={activeService === "Power" ? "active" : ""}
                onClick={() => activeServiceHandler("Power")}
              >
                <div>
                  <span className="material-icons">power</span>
                  <span>Electricity</span>
                </div>
              </li>
              <li
                className={activeService === "CableTV" ? "active" : ""}
                onClick={() => activeServiceHandler("CableTV")}
              >
                <div>
                  <span className="material-icons">live_tv</span>
                  <span>Cable TV</span>
                </div>
              </li>
              <li
                className={activeService === "Others" ? "active" : ""}
                onClick={() => activeServiceHandler("Others")}
              >
                <div>
                  <span className="material-icons">add_circle_outline</span>
                  <span>Others</span>
                </div>
              </li>
            </ul>
          </div>
          <ul className="qr-providers">
            {providers.map((provider, index) => (
              <li
                key={index}
                className={
                  activeProvider === provider.serviceCode ? "active" : ""
                }
                onClick={() => activeProviderHandler(provider.serviceCode)}
              >
                <img
                  src={provider.logo}
                  alt={`provider - ${provider.provider}`}
                />
              </li>
            ))}
          </ul>
          {activeService === "Data" && (
            <div className="recharge-inputs">
              <input
                type="text"
                placeholder="Select Data Plan"
                onChange={(e) => recipientHandler(e.target.value)}
                disabled
              />
              <div className="bene">
                <button>Choose Beneficiaries</button>
                <div className="bene-circles">
                  <div>AD</div>
                  <div>AD</div>
                  <div>AD</div>
                  <div>AD</div>
                  <div>AD</div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                onChange={(e) => costHandler(e.target.value)}
                disabled
              />
            </div>
          )}
          {activeService === "Airtime" && (
            <div className="recharge-inputs">
              <input
                type="text"
                placeholder="Select Data Plan"
                value={recipient}
                onChange={(e) => recipientHandler(e.target.value)}
              />
              <div className="bene">
                <button>Choose Beneficiaries</button>
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                value={cost}
                onChange={(e) => costHandler(e.target.value)}
              />
            </div>
          )}
          <p className="more-info">{props.details}</p>
          <div className="button-section">
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <OrangeButton buttonText="Next" loading={loadingBar} />
          </div>
          <p className="amount-remain">
            Wallet Balance: <span> NGN 345,678,896.00 </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RechargeDet;
