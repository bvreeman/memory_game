import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <div class = "container-fluid">
    <div class="row">
       <nav className="navbar">
          <div class= "col-md-4 col-xs-12">
            <Link className="navbar-brand" to="/">
            Clicky Game
            </Link>
          </div>
          <div class= "col-md-4 col-xs-12">
            <ul>
                <h2>Click a Picture to Begin</h2>
            </ul>
          </div>
          <div class= "col-md-4 col-xs-12">
            <ul>
                <h2>Score</h2>
            </ul>
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