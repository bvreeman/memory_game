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
    pictures: pictures,
    score: 0,
    highScore: 0,
    clickedCards: []
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

  gameOver = () => {
		alert("Game Over. You Lose");
		this.setState({ score: 0 });
		this.noClicked();
		this.mixCards(pictures);
	};

  scoreKeeper = () => {
		// up the score
		this.setState({ score: this.state.score + 1 });

		// check to see if the hi score needs to be updated
		if (this.state.score >= this.state.highScore) {
			this.setState({ highScore: this.state.highScore + 1 });
		}
	};

  // noClicked = () => {
  //   pictures.forEach(function(i) {
  //     document.getElementById(pictures[i].name).setAttribute("data-clicked", false);
  //   })
  // }
  noClicked = () => {
		console.log(pictures);
		for (let i = 0; i < pictures.length; i++) {
            document.getElementById(pictures[i].name).setAttribute("data-clicked", false);
        }
	};

  isItClicked = event => {
		if (event.target.getAttribute("data-clicked") === "true") {
			console.log("clicked");
			this.gameOver();
		} else {
			console.log("not clicked");
			this.scoreKeeper();
			event.target.setAttribute("data-clicked", true);
			this.mixCards(pictures);
		}
  };
  
  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})

      pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'You picked that already! Start Over.'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, clickedCards: [], pictures: pictures})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }

  render() {
    return(
      <Router>
        <div>
          <Navbar />
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
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
