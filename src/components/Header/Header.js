import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            exact
            activeStyle={{ color: "#eb6a2b", fontWeight: "bold" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            activeStyle={{ color: "#eb6a2b", fontWeight: "bold" }}
          >
            Services
          </NavLink>
          <NavLink
            to="/cards"
            activeStyle={{ color: "#eb6a2b", fontWeight: "bold" }}
          >
            Recharge Cards
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{ color: "#eb6a2b", fontWeight: "bold" }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            activeStyle={{ color: "#eb6a2b", fontWeight: "bold" }}
          >
            Blog
          </NavLink>
        </div>
        <NavLink to="/signin">
          <button className="SignInButton">Sign In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="SignUpButton">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
