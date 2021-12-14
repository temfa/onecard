import React from "react";
import "./DashboardTrans.css";
import ProfilePic from "../../assets/Ellipse 9.png";

const DashboardTrans = (props) => {
  const BeneStyle = {
    marginLeft: props.marginLeft,
  };
  return (
    <div className="dashboard-trans-body" style={BeneStyle}>
      <div className="dashboard-profile">
        <img src={ProfilePic} alt="Profile Picture" />
        <p>MTN Topup</p>
      </div>
      <div className="airtime2">
        <p>Airtime</p>
      </div>
      <div className="">
        <p>500</p>
      </div>
    </div>
  );
};

export default DashboardTrans;
