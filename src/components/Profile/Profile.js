import React, { useState } from "react";
import "./Profile.css";
import Bell from "../../assets/icons/bell.svg";
import BellActive from "../../assets/icons/bell-active.svg";
import ProfilePicture from "../../assets/profile-picture.png";
import { NavLink } from "react-router-dom";
import OneCardLogoWhite from "../../assets/logos/onecard-white.svg";

const Profile = ({ pageTitle, userDetails }) => {
  function hamburger() {
    const Sidebar = document.getElementById("Sidebar");

    Sidebar.classList.toggle("show");
  }
  const [notification] = useState(false);
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
    {
      item: "Logout",
      active: false,
      roleType: "all",
      link: "#",
    },
  ]);
  return (
    <div>
      <div className="sidebar Sidebar" id="Sidebar">
        <div className="sidebar-container">
          <img
            className="logo-white"
            src={OneCardLogoWhite}
            white
            alt="white onecard logo"
          />
          <div className="sidebar-menu">
            <p className="title">Menu</p>
            <ul className="menu-list">
              {menuList.map((item, index) => (
                <li>
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
                <li>
                  <NavLink to={item.link}>{item.item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="Burgers" onClick={hamburger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <h1 className="page-title">{pageTitle}</h1>
        <div className="profile-section">
          {notification ? (
            <img src={BellActive} alt="notifications exist" />
          ) : (
            <img src={Bell} alt="zero notification" />
          )}
          <div className="profile-details">
            <h4>Peter James</h4>
            <div className="image-box">
              <img src={ProfilePicture} alt="pic of current user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
