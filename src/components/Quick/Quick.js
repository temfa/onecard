import React from "react";
import "./Quick.css";

const Quick = (props) => {
  return (
    <div className="quick">
      <h2>{props.amount}</h2>
      <p>{props.type}</p>
      <button>Recharge</button>
    </div>
  );
};

export default Quick;
