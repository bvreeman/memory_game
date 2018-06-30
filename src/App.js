import React from "react";
// import PictureCard from "./components/PictureCard";
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

  updateHighScore = (score) => {
    if (score > this.state.highScore) {
      return score;
    } else {
      return this.state.highScore;
    }
  };
  

  gameOver = () => {
    let newHighScore = this.updateHighScore(this.state.score);
    alert('You lose');
    this.setState({
      score: 0,
      clickedCards: [],
      highScore: newHighScore
    })
    this.mixCards(pictures)
  }

  mixCards = array => {
    const newArray = pictures.sort(() => Math.random()-0.5)
    this.setState({pictures : newArray})
  }

  componentDidMount() {
    this.mixCards(pictures)
  }
  
  handleClick = (id) => {
    console.log(id)
    if (this.state.clickedCards.includes(id)){
      this.gameOver()
    } else {
      this.state.clickedCards.push(id);
      this.mixCards()
      this.setState((prevState) => {
        prevState.score++
      })
    }
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
              // console.log(this.handleClick)))}
              <button key={i}>
                <div className="img-container">
                  <img id={picture.id} key={i} alt={picture.name} src={picture.image} data-clicked={picture.clicked} onClick={this.handleClick.bind(this, picture.id)} />
                </div>
              </button>
            ))
            }
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
