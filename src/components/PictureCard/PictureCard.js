import React from "react";
import "./PictureCard.css";

class PictureCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return(
  <button>
    <div className="img-container">
      <img id={this.props.name} alt={this.props.name} src={this.props.image} data-clicked={this.props.clicked} onClick={ this.handleClick }
 />
    </div>
  </button>
    )
  }
};

export default PictureCard;
