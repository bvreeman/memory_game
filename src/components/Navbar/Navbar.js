import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div class = "container-fluid">
    <div class="row">
       <nav className="navbar">
          <div class= "col-md-4 col-xs-12">
          <img alt='The Simpsons Game' class='simpsonsNavPic' src={'./assets/images/simpsonsGame.jpg'} />
          </div>
          <div class= "col-md-4 col-xs-12">
            <div class='row'>
              <h2>Click each image</h2>
            </div>
            <div class='row'>
              <h2>only once!</h2>
            </div>
          </div>
          <div class= "col-md-4 col-xs-12">
            <div class='row'>
              <h2>Score</h2>
            </div>
            <div class='row'>

            </div>
          </div>
      </nav>
    </div>
  </div>

);

export default Navbar;

/* <NavDropdown eventKey={3} title="Choose a set of Images" id="basic-nav-dropdown">
<MenuItem eventKey={3.1}>80's Cartoons</MenuItem>
<MenuItem eventKey={3.2}>Puppies and Kitties</MenuItem>
<MenuItem eventKey={3.3}>Dragons</MenuItem>
<MenuItem eventKey={3.4}>Movies</MenuItem>
</NavDropdown> */