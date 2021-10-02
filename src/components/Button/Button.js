import React from "react";

const Button = (props) => {
  const ButtonStyle = {
    padding: "18px 36px",
    borderRadius: "20px",
    fontSize: "18px",
    fontFamily: "Roboto",
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    border: "none",
    color: props.Color,
    marginTop: props.marginTop,
  };
  return <button style={ButtonStyle}>{props.buttonText}</button>;
};

export default Button;
