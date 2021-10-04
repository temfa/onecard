import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        {/* <Group/>  */}
        <img src={Group} alt="Logo" />
      </div>
      <div className="NavHeader">
        <div className="NavLinks">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="Buttons">
          <Link to="/signin">
            <button className="SignIn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="SignUp">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
