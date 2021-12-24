import React from "react";

const BorderedButton = (props) => {
  const ButtonStyle = {
    padding: "15px 36px",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "Roboto",
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    border: "1px solid #EB6A2B",
    color: props.Color,
    marginTop: props.marginTop,
    width: props.width,
    height: props.height,
    marginLeft: props.marginLeft,
    fontWeight: props.fontWeight,
  };
  return <button style={ButtonStyle}>{props.buttonText}</button>;
};

export default BorderedButton;
