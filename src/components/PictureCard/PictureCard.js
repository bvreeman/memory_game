import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <button>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} data-clicked={props.clicked} onClick={() => this.props.handleClick(this.props.clicked)}
 />
    </div>
  </button>
);

export default PictureCard;
