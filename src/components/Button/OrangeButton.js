import React from "react";
import LoadingGif from "../../assets/loader3.gif";

const OrangeButton = ({ buttonText, loading }) => {
  const ButtonStyle = {
    paddingTop: "14px",
    paddingBottom: "15px",
    borderRadius: "15px",
    fontSize: "14px",
    // fontFamily: "Roboto",
    cursor: "pointer",
    backgroundColor: "#EB6A2B",
    border: "none",
    color: "#fff",
    width: "100%",
  };
  return <button style={ButtonStyle} type="submit">
    { !loading ? buttonText : <img src={LoadingGif} alt="short loading animation" /> }
  </button>;
};

export default OrangeButton;