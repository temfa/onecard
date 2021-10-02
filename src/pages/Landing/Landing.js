import React from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import PhoneMan from "../../assets/PhoneMan.jpg";
import BlackMan from "../../assets/BlackMan.jpg";
import Auto from "../../assets/Auto.svg";
import Recharge from "../../assets/Recharge.svg";
import Schedule from "../../assets/Schedule.svg";
import AppScreen from "../../assets/app-screens.png";
import Man from "../../assets/man.png";

const Landing = () => {
  return (
    <div>
      <div className="Welcome">
        <Header />
        <div className="WelcomeText">
          <h2>
            Life just got easier <span> with One1Card</span>
          </h2>
          <p>
            Schedule (or automatically repeat) airtime recharges, data
            recharges, tv subscriptions or electricity payments
          </p>
          <button>Quick Recharge</button>
        </div>
        <div>
          <img src={Man} className="ManImage" alt="man" />
        </div>
      </div>
      <div className="Recharge">
        <div className="RechargeText">
          <h2>
            Recharge options with <span className="Card"> One1Card</span>
          </h2>
        </div>
        <div className="RechargeOption">
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <img src={Recharge} alt="Recharge" />
            </div>
            <p className="RechargePara1">Instant Recharge</p>
            <p className="RechargePara2">
              This allows you to recharge instantly
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              <img src={Schedule} alt="Schedule" />
            </div>
            <p className="RechargePara1">Scheduled Recharge</p>
            <p className="RechargePara2">
              You can set a future date and time for a recharge
            </p>
          </div>
          <div className="RechargeOptions">
            <div className="RechargeBox">
              {/* <div className="RechargeBoxContainer"> */}
              <img src={Auto} alt="Auto" />
              {/* </div> */}
            </div>
            <p className="RechargePara1">Auto Recharge</p>
            <p className="RechargePara2">
              Recharges can be set to automically repeat daily, weekly or
              monthly
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
              For more recharge options | <span> Sign up</span>{" "}
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
            </p>
            <p>
              Verified individuals and businesses have access to even more
              powerful capabilities
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
          <img className="Pictures" src={AppScreen} alt="FirstPicture" />
        </div>
        <div className="DashCon">
          <h2>Sign up and enjoy swift recharge service to any network</h2>
          <Button
            buttonText="Sign Up for Free"
            marginTop="50px"
            backgroundColor="#EB6A2B"
            Color="White"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
