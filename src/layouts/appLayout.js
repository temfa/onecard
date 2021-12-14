import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Profile from "../components/Profile/Profile";
import "./appLayout.css";

const WebLayout = ({ children, pageTitle }) => {
  return (
    <div style={style}>
      <Sidebar />
      <div style={style2} className="profile-layout">
        <Profile pageTitle={pageTitle} />
        {children}
      </div>
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-between",
};

const style2 = {
  flex: 1,
};

export default WebLayout;
