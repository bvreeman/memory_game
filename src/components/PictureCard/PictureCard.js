import React from "react";
import "./PictureCard.css";

const handleClick = (props) => {
  props.mixCards();
  props.clickedCharacter(props.id);
}

const PictureCard = props => (
  <button onClick = {props.Clicked}>
    <div className="img-container" onClick={() => handleClick(props)}>
      <img id={props.name} alt={props.name} src={props.image} data-clicked={props.clicked} />
    </div>
  </button>
);

export default PictureCard;
