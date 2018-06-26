import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <div className="img-container">
    <img alt={props.name} src={props.image} />
  </div>
);

export default PictureCard;
