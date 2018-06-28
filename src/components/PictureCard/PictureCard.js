import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <button onClick = {props.Clicked}>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} data-clicked={props.clicked} />
    </div>
  </button>
);

export default PictureCard;
