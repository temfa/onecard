import React from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PhoneMan from "../../assets/PhoneMan.jpg";
import BlackMan from "../../assets/BlackMan.jpg";
import Auto from "../../assets/Auto.svg";
import Recharge from "../../assets/Recharge.svg";
import Schedule from "../../assets/Schedule.svg";
import Rectangle3 from "../../assets/Rectangle3.jpg";
import Rectangle4 from "../../assets/Rectangle4.jpg";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="Recharge">
        <div className="RechargeText">
          <h2>
            Recharge options{" "}
            <span className="Cards">
              {" "}
              <br /> with <span className="Card"> One1Card </span>{" "}
            </span>
          </h2>
        </div>
        <div className="RechargeOption">
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <div className="RechargeBoxContainer">
                <img src={Recharge} alt="Recharge" />
              </div>
            </div>
            <p className="RechargePara1">Instant Recharge</p>
            <p className="RechargePara2">
              This allows you to recharge{" "}
              <span>
                {" "}
                <br /> instantly
              </span>
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <div className="RechargeBoxContainer">
                {" "}
                <img src={Schedule} alt="Schedule" />
              </div>
            </div>
            <p className="RechargePara1">Scheduled Recharge</p>
            <p className="RechargePara2">
              You can set a future date and{" "}
              <span>
                {" "}
                <br /> time for a recharge
              </span>
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <div className="RechargeBoxContainer">
                {" "}
                <img src={Auto} alt="Auto" />
              </div>
            </div>
            <p className="RechargePara1">Auto Recharge</p>
            <p className="RechargePara2">
              Recharges can be set to automically{" "}
              <span>
                {" "}
                <br /> repeat daily, weekly or monthly
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="QuickRecharge">
        <div className="ColorRectangle">
          <div className="ColorRectangle2"></div>
        </div>
        <div className="ColorRectangle3"></div>
        <div className="QuickRechargeBody">
          <div className="QuickRechargeText">
            <div className="RechargeButton">
              <h2>Quick Recharge</h2>
              <div className="RechargeButtons">
                <button className="Data">Data</button>
                <button className="Airtime">Airtime</button>
              </div>
            </div>
            <div className="SelectPlan">
              <select className="NetworkSelect">
                <option>Select Your Network</option>
              </select>
              <select className="NetworkSelect">
                <option>Select Data Plan </option>
              </select>
              <input
                type="text"
                className="NetworkSelect"
                placeholder="Phone Number"
              />
            </div>
            <button>Quick Recharge</button>
            <p>
              For more recharge options |{" "}
              <span>
                {" "}
                <a href="#"> Sign up </a>
              </span>{" "}
            </p>
          </div>
          <div className="QuickRechargePicture">
            <img src={PhoneMan} alt="Phoneman" />
          </div>
        </div>
      </div>
      <div className="Why">
        <div className="WhyUs">
          <div className="WhyPicture">
            <img src={BlackMan} alt="BlackMan" />
          </div>
          <div className="WhyBody">
            <h2>Why One1Card?</h2>
            <p>
              We have built a robust technology that enables every individual to
              enjoy easy, convenient and extensive recharge or payment solutions
              for various services.
              <span>
                {" "}
                <br /> <br /> Verified individuals and businesses have access to
                even more powerful capabilities
              </span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="DashboardContainer">
        <div className="ColorRectangle4">
          <div className="ColorRectangle5"></div>
        </div>
        <div className="ColorRectangle6"></div>
        <div className="DashboardPicture">
          <div className="DashboardPictures">
            <img className="FirstPicture" src={Rectangle4} alt="FirstPicture" />
            <img
              className="SecondPicture"
              src={Rectangle3}
              alt="SecondPicture"
            />
          </div>
        </div>
        <div className="DashCon">
          <h2>
            Sign up and enjoy swift{" "}
            <span>
              {" "}
              <br /> recharge service to any network
            </span>
          </h2>
          <div className="DashConButton">
            <button>Sign Up for Free</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
