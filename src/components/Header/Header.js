import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        {/* <Group/>  */}
        <img src={Group} alt="Logo" />
      </div>
      <div className="NavHeader">
        <div className="NavLinks">
          <p>
            <a href="/" className="Active">
              {" "}
              Home
            </a>
          </p>
          <p>
            <a href="/"> Services</a>
          </p>
          <p>
            <a href="/"> Cards</a>
          </p>
          <p>
            <a href="/"> Contact</a>
          </p>
        </div>
        <div className="Buttons">
          <button className="SignIn">Sign In</button>
          <button className="SignUp">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
