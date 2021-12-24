import React from "react";
import LoadingGif from "../../assets/loader3.gif";

const OrangeButton = ({ buttonText, loading, frameOnly, disabled }) => {
  const ButtonStyle = {
    paddingTop: "14px",
    paddingBottom: "15px",
    borderRadius: frameOnly ? "20px" : "15px",
    fontSize: "14px",
    // fontFamily: "Roboto",
    cursor: "pointer",
    backgroundColor: !frameOnly ? "#EB6A2B" : "rgba(255,255,255,0)",
    border: frameOnly? "1px solid #EB6A2B" : "none",
    color: frameOnly ? "#EB6A2B" : "#fff",
    width: frameOnly ? "fit-content" : "100%",
    paddingRight: frameOnly ? "50px" : "0px",
    paddingLeft: frameOnly ? "50px" : "0px",
    opacity: disabled ? '0.5' : '1'
  };
  return <button style={ButtonStyle} type="submit" disabled={disabled}>
    { !loading ? buttonText : <img src={LoadingGif} alt="short loading animation" /> }
  </button>;
};

export default OrangeButton;