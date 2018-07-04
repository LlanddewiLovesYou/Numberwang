import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board/board.jsx";
import Modal from "./components/modal/modal.jsx";
import Contestant from "./components/contestant/contestant.jsx";
import Youtube from "./components/youtube/youtube.jsx";
import GameOver from "./components/gameover/gameover.jsx";
import Presenter from "./components/presenter/presenter.jsx";
import WhosTurn from "./components/presenter/whosturn.jsx";
import NumberWang from "./assets/numberwanglogo.png";
import WangerNumb from "./assets/wangernumb.png";
import JulieImg from "./assets/julie.jpg";
import SimonImg from "./assets/simon.jpg";
import pizza from "./assets/pizza.jpg";
import poll from "./assets/poll.jpg";
import doggo from "./assets/doggo.jpg";
import catbox from "./assets/catbox.jpg";
import closed from "./assets/closed.jpg";
import Bag from "./assets/paperbag.png";
import correct from "./assets/thatsnumberwang.wav";
import themesong from "./assets/themesong.wav";
import { PHRASES, OPENING, CLOSING, HOMETOWNS, WANGERNUMB } from './constants.js'

class App extends Component {

  constructor(props) {
    const PICS = [pizza, poll, doggo, catbox, closed];
    super(props);
    this.state = {
      youtube: true,
      hometowns: this.determineHometowns(),
      numberwang: false,
      turn: "Julie",
      reRenderBoard: 0,
      roundLength: 0,
      turns: 0,
      roundTwo: false,
      roundTwoModal: false,
      rotateBoard: false,
      imgSrc: PICS[Math.round(Math.random() * 5)],
      boardImg: false,
      speaking: true,
      saying: "",
      signedIn: 0,
      img: false,
      wangernumb:false,
      gameOver: false,
      playAgain: false
    };
    this.playTurn = this.playTurn.bind(this);
    this.start = this.start.bind(this);
    this.roundCheck = this.roundCheck.bind(this);
    this.rotateBoard = this.rotateBoard.bind(this);
    this.speak = this.speak.bind(this);
    this.signIn = this.signIn.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.determineHometowns = this.determineHometowns.bind(this);
  }

  start() {
    const song = new Audio(themesong)
    this.setState({ youtube: false, turns: 0 });
    this.determineRoundLength();
    if (this.state.roundTwo === false) {
      this.speak(OPENING);
    }
    song.play()
  }

  determineRoundLength() {
    let possibleRoundLengths = [3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 9, 10];
    let roundLength = possibleRoundLengths[Math.round(Math.random() * 12)];
    this.state.roundLength = roundLength;
  }

  roundCheck() {
    console.log(`Round length: ${this.state.roundLength}`);
    console.log(`turns: ${this.state.turns}`);
    if (this.state.turns < this.state.roundLength) {
      return false;
    } else {
      return true;
    }
  }

  playTurn() {
    this.takeTurn();
    this.thatsNumberwang();
    if (this.roundCheck() && this.state.roundTwo === false) {
      setTimeout(() => this.displayModal("roundTwoModal"), 1000);
      setTimeout(() => this.start(), 3000);
      setTimeout(() => this.setState({ roundTwo: true }), 2000);
      setTimeout(() => this.speak(WANGERNUMB), 3000)
      setTimeout(() => this.rotateBoard(), 7000);

    }
    if (this.roundCheck() && this.state.roundTwo === true) {
      const song = new Audio(themesong)
      song.play()
      setTimeout(() => this.displayModal('wangernumb'), 1000)
      setTimeout(() => this.speak(CLOSING), 3000)
      setTimeout(() => this.gameOver(), 4000)
      setTimeout(() => this.setState({playAgain: true}), 14000)
    }
  }

  reRenderBoard() {
    this.setState({ reRenderBoard: this.state.reRenderBoard + 1 });
  }

  rotateBoard() {
    this.setState({rotateBoard: true });
    setTimeout(() => this.setState({img: true, boardImg: true }), 3000);
    setTimeout(() => this.setState({boardImg: false}), 6000);
    setTimeout(() => this.setState({rotateBoard: false}), 9000);
    setTimeout(() => this.setState({img: false }), 12000);
  }

  isItNumberwang() {
    let isNumberwang = Math.round(Math.random());
    if (isNumberwang === 0) {
      this.reRenderBoard();
      return false;
    } else {
      return true;
    }
  }

  takeTurn() {
    this.state.turn === "Julie"
      ? this.setState({ turn: "Simon" })
      : this.setState({ turn: "Julie" });
    this.state.turns++;
  }

  thatsNumberwang() {
    const ding = new Audio(correct)
    let boolean = this.isItNumberwang();
    this.setState({ numberwang: boolean });
    if (boolean) {
      ding.play()
    }
    setTimeout(() => this.setState({ numberwang: false }), 1000);
  }

  determineModalPhrase() {
    let modalPhrase = PHRASES[Math.round(Math.random() * 28)]
    return modalPhrase
  }

  displayModal(modalName) {
    this.setState({ [modalName]: true });
    setTimeout(() => this.setState({ [modalName]: false }), 1500);
  }

  speak(speechArray) {
    speechArray.push(" ");
    speechArray.forEach((sentence, idx) => {
      setTimeout(() => this.setState({ speaking: true, saying: sentence }), 2000 * idx);
      setTimeout(() => console.log(sentence), 2000 * idx);
    });
    // setTimeout(() => this.setState({speaking: false}), 2000 * speechArray.length)
  }

  signIn() {
    let speaking = this.state.speaking;
      if (this.state.signedIn === 1) {
        speaking = false;
      }
    this.setState({ signedIn: this.state.signedIn + 1, speaking });
  }

  gameOver() {
    this.setState({gameOver: !this.state.gameOver})
  }

  determineHometowns() {
    let hometowns = HOMETOWNS[Math.round(Math.random() * 6)]
    return hometowns
  }

  render() {
    let logo;
      if (this.state.roundTwo){
        logo = WangerNumb
      } else {
        logo = NumberWang
      }

    let classVar;
    if (this.state.img === false) {
      classVar = 'rotate-image'
    } else if (this.state.img && this.state.boardImg) {
      classVar = 'rotate-image rotateBoardIn'
    } else if (this.state.img && !this.state.boardImg) {
      classVar = 'rotate-image rotateBoardOut'

    }
    // <button onClick={this.start} onDoubleClick={this.rotateBoard}>TEST MY CODE</button>
    return (
      <div className="App">
        {this.state.youtube ? <Youtube start={this.start} /> : null}
        {this.state.roundTwoModal ? <Modal phrase="It's time for WangerNumb!" /> : null}
        {this.state.wangernumb ? <Modal phrase="That's WangerNumb! Game Over!"/> : null}
        {this.state.numberwang ? <Modal phrase={this.determineModalPhrase()} /> : null}
        {this.state.playAgain ? <GameOver />: null}
        <img src={logo} className="logo animated rotateIn" />
        <Board
          className='board'
          reRender={this.state.reRenderBoard}
          rotateBoard={this.state.rotateBoard}
        />
      { this.state.img ? <img src={this.state.imgSrc} className={classVar} /> : null}
      {this.state.gameOver ? <img src={Bag}  className='bag'/> : null}
        <div className="contestant-1">
          <Contestant
            src={JulieImg}
            name="Julie"
            hometown={this.state.hometowns[0]}
            playTurn={this.playTurn}
            signIn={this.signIn}
          />
        </div>
        {this.state.gameOver ? <div className='presenter-text winner'>WINNER!</div> :null}
        <div className="contestant-2">
          <Contestant
            src={SimonImg}
            name="Simon"
            hometown={this.state.hometowns[1]}
            playTurn={this.playTurn}
            signIn={this.signIn}
          />
        </div>
        <div className="presenter">
          {this.state.speaking ? (
            <Presenter saying={this.state.saying} />
          ) : (
            <WhosTurn turn={this.state.turn} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
