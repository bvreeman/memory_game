import React from "react";
import "./PictureCard.css";
// import App from "../../App.js";



const PictureCard = props => (
  <button>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} data-clicked={props.clicked} onClick={props.clicked}
 />
    </div>
  </button>
);

export default PictureCard;
