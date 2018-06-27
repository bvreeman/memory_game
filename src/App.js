import React from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pictures from "./pictures.json";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Jumbotron } from 'reactstrap';

class App extends React.Component {
  state = {
    cardArray: [],
    pictures,
    score: 0,
    highScore: 0
  }
  shuffleCards = array => {
    let i, h, g;
    for (i = array.length -1; i > 0; i--) {
      h = Math.floor(Math.random() * (i + 1));
      g = array[i];
      array[i] = array[h];
      array[h] = g;
    }
    this.setState({ cardArray: array })
  }

  componentDidMount() {
    this.shuffleCards(pictures)
  }

  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Jumbotron>
            <div class="container-fluid">
              <img alt='The Simpsons' class='jumboPic' src={'/assets/images/simpsonsJumbotron.png'} />
            </div>
          </Jumbotron>
          <hr/>
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
