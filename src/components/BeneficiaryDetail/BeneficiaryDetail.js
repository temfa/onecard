import React from "react";
import "./BeneficiaryDetail.css";
import ProfilePic from "../../assets/Ellipse 9.png";
import Delete from "../../assets/Vector(2).png";

const BeneficiaryDetail = (props) => {
  const BeneStyle = {
    marginLeft: props.marginLeft,
  };
  return (
    <div className="beneficiary-body" style={BeneStyle}>
      <div className="beneficiary-profile">
        <img src={ProfilePic} alt="Profile Picture" />
        <div>
          <h2>Adam Daniel</h2>
          <p>+234 8165478837</p>
        </div>
      </div>
      <div className="beneficiary-details">
        <button>Send</button>
        <img src={Delete} alt="Delete" />
      </div>
    </div>
  );
};

export default BeneficiaryDetail;
