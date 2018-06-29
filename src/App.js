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
    pictures: pictures,
    score: 0,
    highScore: 0,
    clickedCards: [],
  }

  gameOver = () => {
    // this.setState({
    //   score: 0,
    //   clickedCards: []
    // })
    this.mixCards(pictures)
  }

  mixCards = array => {
    const newArray = array.sort(() => Math.random()-0.5)
    this.setState({pictures : newArray})
  }

  componentDidMount() {
    this.mixCards(pictures)
  }
  
  handleClick = clickedItem => {
    // if (this.state.clickedCards.includes(clickedItem)){
    //   this.gameOver()
    // } else {
    //   this.state.clickedCards.push(clickedItem);
    //   this.mixCards()
    //   this.setState((prevState) => {
    //     prevState.score++
    //   })
    // }
    this.state.mixCards(pictures);
    // let scoreArray = this.state.scores
    // if (clickedItem.clicks === 0) {
    //   clickedItem.clicks ++
    //   if (scoreArray[0].score === scoreArray[0].highScore) {
    //   scoreArray[0].score++;
    //   scoreArray[0].high++;
    //   }
    //   else if (scoreArray[0].score < scoreArray[0].high){
    //   scoreArray[0].score++;
    //   }
    //   this.setState({
    //   scoreArray
    //   });
    // }
    // else {
    //   scoreArray[0].score = 0;
    //   this.setState({
    //     scoreArray,
    //   });
    //   this.state.pictures.forEach(picture => (
    //     picture.clicks=0
    //   ))
    // }
  };

  render() {
    return(
      <Router>
        <div>
          <Navbar 
            score = {this.state.score}
            highScore = {this.state.highScore}
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
              clicked = {this.clicked}
              handleClick={this.handleClick}
            />
            ))
            }
            {/* {console.log(this.state)} */}
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
