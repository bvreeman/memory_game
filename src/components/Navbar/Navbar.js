import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className = "container-fluid">
      <div className="row">
        <nav className="navbar navbar-fixed-top">
            <div className= "col-md-4 col-sm-4 col-xs-6">
            <img alt='The Simpsons Game' className='simpsonsNavPic' src={'./assets/images/simpsonsGame.jpg'} />
            </div>
            <div className= "col-md-4 col-sm-4 col-xs-4 notSmallScreen">
              <div className='row'>
                <h3>Click each image only once!</h3>
              </div>
            </div>
            <div className= "col-md-4 col-sm-4 col-xs-6">
              <div className='row'>
                <h3>Score: {props.score}  Hi Score: {props.highScore}</h3>
              </div>
            </div>
            <div className= "col-xs-12 forSmallScreen">
              <div className='row'>
                <h3>Click each image only once!</h3>
              </div>
            </div>
        </nav>
      </div>
    </div>
);

export default Navbar;