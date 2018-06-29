import React from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pictures from "./pictures.json";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Jumbotron } from 'reactstrap';
import scores from "./scores.json";

class App extends React.Component {
  state = {
    cardArray: [],
    pictures: pictures,
    score: 0,
    highScore: 0,
    count: 0,
    clickedCards: [],
    scores: scores
  }

  // shuffle = pictures => {
  //   let buffer_array = pictures.slice(),
  //   cardArray = [],
  //   index;

  //   pictures.forEach(function () {
  //     index = Math.floor(Math.random() * buffer_array.length);
  //     cardArray.push(buffer_array[index]);
  //     buffer_array.splice(index, 1);
  //   });
  //   return cardArray;
  // }

  // componentDidMount() {
  //   this.shuffle(pictures)
  // }

  mixCards = array => {
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
    this.mixCards(pictures)
  }
  
  handleClick = (clickedItem) => {
    let scoreArray = this.state.scores
    if (clickedItem.clicks === 0) {
      clickedItem.clicks ++
      if (scoreArray[0].score === scoreArray[0].highScore) {
      scoreArray[0].score++;
      scoreArray[0].high++;
      }
      else if (scoreArray[0].score < scoreArray[0].high){
      scoreArray[0].score++;
      }
      this.setState({
      scoreArray
      });
    }
    else {
      scoreArray[0].score = 0;
      this.setState({
        scoreArray,
      });
      this.state.pictures.forEach(picture => (
        picture.clicks=0
      ))
    }
  };

  render() {
    return(
      <Router>
        <div>
          <Navbar 
            score = {scores[0].score}
            highScore = {scores[0].highScore}
          />
          <Jumbotron>
            <div className="container-fluid">
              <img alt='The Simpsons' className='jumboPic' src={'/assets/images/simpsonsJumbotron.png'} />
            </div>
          </Jumbotron>
          <hr/>
          <Wrapper>
            {this.state.pictures.map((picture, i) => (
            <PictureCard
              key = {i}
              id = {i}
              image = {picture.image}
              name = {picture.name}
              clicked = {false}
              isItClicked = {this.isItClicked}
            />
            ))
            }
            {console.log(this.state)}
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
