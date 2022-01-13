import React, { useState } from "react";
import OneCardLogoWhite from "../../assets/logos/onecard-white.svg";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const Sidebar = () => {
  const { keycloak } = useKeycloak();

  const [menuList] = useState([
    {
      item: "Dashboard",
      roleType: "all",
      link: "/dashboard",
    },
    {
      item: "Single Recharge",
      roleType: "all",
      link: "/single",
    },
    {
      item: "Bulk Recharge",
      roleType: "all",
      link: "/bulk",
    },
    {
      item: "Fund Wallet",
      roleType: "all",
      link: "/fund",
    },
    {
      item: "Beneficiaries",
      roleType: "all",
      link: "/beneficiaries",
    },
    {
      item: "Auto & Scheduled",
      roleType: "all",
      link: "/auto",
    },
    {
      item: "Transactions",
      roleType: "all",
      link: "/trans",
    },
    {
      item: "Roles",
      roleType: "all",
      link: "/roles",
    },
  ]);
  const [accountList] = useState([
    {
      item: "Profile",
      active: false,
      roleType: "all",
      link: "/profilepage",
    },
    // {
    //   item: "Logout",
    //   active: false,
    //   roleType: "all",
    //   link: "#",
    // },
  ]);
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <img
          className="logo-white"
          src={OneCardLogoWhite}
          alt="white onecard logo"
        />
        <div className="sidebar-menu">
          <p className="title">Menu</p>
          <ul className="menu-list">
            {menuList.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  activeStyle={{ fontWeight: "bold", cursor: "text" }}
                >
                  {item.item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-menu">
          <p className="title">Account</p>
          <ul className="menu-list">
            {accountList.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-menu">
          <ul className="menu-list">
              <li className="logout">
                <p onClick={() => keycloak.logout()}>Logout</p>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
