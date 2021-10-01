import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";
import Man from "../../assets/Man.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderHead">
        <div className="HeaderLogo">
          {/* <Group/>  */}
          <img src={Group} alt="Logo" />
        </div>
        <div className="NavHeader">
          <div className="NavLinks">
            <p>
              <a href="" className="Active">
                {" "}
                Home
              </a>
            </p>
            <p>
              <a href=""> Services</a>
            </p>
            <p>
              <a href=""> Cards</a>
            </p>
            <p>
              <a href=""> Contact</a>
            </p>
          </div>
          <div className="LoginButton">
            <div className="Buttons">
              <button className="SignIn">Sign In</button>
              <button className="SignUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Welcome">
        <div className="WelcomeText">
          <h2>
            Life just got easier{" "}
            <span>
              {" "}
              <br /> with One1Card{" "}
            </span>
          </h2>
          <p>
            Schedule (or automatically repeat) airtime recharges, data
            <span>
              {" "}
              <br /> recharges, tv subscriptions or electricity payments
            </span>
          </p>
          <button>Quick Recharge</button>
        </div>
        <div>
          <img src={Man} className="ManImage" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Header;
