import React from "react";
import "./Header.css";
import Group from "../../assets/Group.svg";
import { NavLink } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function hamburger() {
  const NavHeader = document.getElementById("NavHeader");
  NavHeader.classList.toggle("show");
  document.getElementById("Burger").classList.toggle("burger-show");
}

const Header = () => {
  const { keycloak } = useKeycloak();

  return (
    <div className="Header">
      <div className="HeaderLogo">
        {/* <Group/>  */}
        <img src={Group} alt="Logo" />
        <div className="Burger" onClick={hamburger} id="Burger">
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
        <div className="auth-links">
          {/* <NavLink> */}
          <NavLink to="/dashboard">
            {keycloak && !keycloak.authenticated && <button className="SignInButton">Dashboard</button>}
          </NavLink>
          {/* <NavLink to="/signup"> */}
            {/* {keycloak && !keycloak.authenticated && <button className="SignUpButton" onClick={() => keycloak.register()}>Sign Up</button>} */}
          {/* </NavLink> */}
          {keycloak && keycloak.authenticated && <p onClick={() => keycloak.logout()}>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
