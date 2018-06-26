import React from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pictures from "./pictures.json";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    pictures
  }
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            {this.state.pictures.map((picture, i) => (
            <PictureCard
              key={i}
              image={picture.image}
            />
            ))
            }
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
