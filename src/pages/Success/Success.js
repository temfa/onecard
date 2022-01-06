import React, { useEffect, useState } from "react";
import OrangeButton from "../../components/Button/OrangeButton";
import Header from "../../components/Header/Header";
import JumpingMan from "../../assets/success.png";
// import { useHistory } from 'react-router-dom';
import "./Success.css";
import Rectangle from "../../assets/Rectangle 25.png";
import loader from "../../assets/loading.gif";
import axios from "axios";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://onecard.factorialsystems.io/api/v1/recharge/" + localStorage.id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        if (res.data.message) {
          setLoading(false)
          console.log(res.data)
          setMessage(res.data.message)
          // localStorage.removeItem('id');
          // window.location.href = window.location.origin;
          // window.history.replaceState(null, 'One1Card | OneCard Nigeria', '/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  })
  return (
    <div>
      {
      loading && <div className="loading-overlay">
        <div className="loading-box">
          <img src={loader} alt="Loading icon" />
        </div>
      </div>
      }
      <Header />
      {!loading && <div className="container">
        <div className="success-content">
          <h3>{message}</h3>
          {/* <h3>Recharge Successful</h3> */}
          {/* <p>{message}</p> */}
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
      }
    </div>
  );
};

export default Success;
