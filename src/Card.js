import React from "react";
import "./card.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <h3 className="card-title">{data?.title}</h3>
      <p className="card-description">{data?.description}</p>
      <p className="card-value">{data?.value}</p>
    </div>
  );
};

export default Card;
