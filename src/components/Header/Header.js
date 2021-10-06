import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";
import { Link } from "react-router-dom";

function hamburger() {
  const NavHeader = document.getElementById("NavHeader");

  NavHeader.classList.toggle("show");
}

const Header = (props) => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        {/* <Group/>  */}
        <img src={Group} alt="Logo" />
        <div className="Burger" onClick={hamburger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className="NavHeader" id="NavHeader">
        <div className="NavLinks">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/signin">
          <button className="SignInButton">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="SignUpButton">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
