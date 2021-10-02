import React from "react";
import "./ServicesBox.css";
import Button from "../../components/Button/Button";

const ServicesBox = (props) => {
  console.log(props);
  const backgroundStyle = {
    backgroundColor: props.backgroundColor,
  };
  return (
    <div style={backgroundStyle} className="ServiceBox">
      <img src={props.imgName} alt="Service Man" />
      <div className="ServiceDetails">
        <div>
          <h2>{props.bigText}</h2>
          <p>{props.smallText}</p>
        </div>
        <Button buttonText={props.buttonText} backgroundColor="#EB6A2B" />
      </div>
    </div>
  );
};

export default ServicesBox;
