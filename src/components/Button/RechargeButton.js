import React from "react";

const RechargeButton = (props) => {
  const ButtonStyle = {
    padding: "20px 21px",
    borderRadius: "20px",
    fontSize: "14px",
    fontFamily: "Roboto",
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    border: "none",
    color: props.Color,
    marginTop: props.marginTop,
    width: props.width,
    height: props.height,
  };
  return <button style={ButtonStyle}>{props.buttonText}</button>;
};

export default RechargeButton;
