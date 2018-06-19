import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board/board.jsx'
import Modal from './components/modal/modal.jsx'
import Contestant from './components/contestant/contestant.jsx'
import Youtube from './components/youtube/youtube.jsx'
import Presenter from './components/presenter/presenter.jsx'
import Logo from './assets/numberwanglogo.png'
import JulieImg from './assets/julie.jpg'
import SimonImg from './assets/simon.jpg'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      youtube: true,
      numberwang: false,
      turn: "Julie",
      reRenderBoard: 0,
      roundLength: 0,
      turns: 0,
      roundTwo: false,
      roundTwoModal: false
    }
    this.playTurn = this.playTurn.bind(this)
    this.start = this.start.bind(this)
    this.roundCheck = this.roundCheck.bind(this)
  }

  start(){
    this.setState({youtube:false})
    this.determineRoundLength()
  }

  determineRoundLength() {
    let possibleRoundLengths = [3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 9, 10]
    let roundLength = possibleRoundLengths[Math.round(Math.random() * 12)]
    this.state.roundLength = roundLength
  }

  roundCheck() {
    console.log(`Round length: ${this.state.roundLength}`)
    console.log(`turns: ${this.state.turns}`)
    if (this.state.turns < this.state.roundLength){
       return false
    } else {
      return true
    }
  }

  playTurn() {
    this.takeTurn()
    this.thatsNumberwang()
    if (this.roundCheck() && this.state.roundTwo === false) {
      setTimeout(() => this.displayModal('roundTwoModal'), 1000)
      setTimeout(() => this.setState({roundTwo: true}), 2000)
    }
  }

  reRenderBoard() {
    this.setState({reRenderBoard: this.state.reRenderBoard + 1})
  }

  isItNumberwang() {
    let isNumberwang = Math.round(Math.random())
    if (isNumberwang === 0) {
      this.reRenderBoard()
      return false
    } else {
      return true
    }
  }

  takeTurn() {
    this.state.turn === 'Julie' ? this.setState({turn: "Simon"}) : this.setState({turn: "Julie"})
    this.state.turns ++
  }

  thatsNumberwang() {
    let boolean = this.isItNumberwang()
    this.setState({numberwang: boolean})
    setTimeout(() => this.setState({numberwang: false}), 1000)
  }

  displayModal(modalName) {
    this.setState({[modalName]: true})
    setTimeout(() => this.setState({[modalName]: false}), 1000)
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.roundCheck}>TEST MY CODE</button>
        { this.state.youtube ? <Youtube start={this.start}/> : null }
        { this.state.roundTwoModal ? <Modal phrase="Round 2, Let's rotate the board!"/> : null }
        { this.state.numberwang ? <Modal phrase="That's Numberwang!"/> : null }
        <img src={Logo} className='logo animated rotateIn'/>
        <Board className='board' reRender={this.state.reRenderBoard}/>
        <div className='contestant-1'>
          <Contestant
             src={JulieImg}
             name='Julie'
             playTurn={this.playTurn}
             />
        </div>
        <div className='contestant-2'>
          <Contestant
            src={SimonImg}
            name='Simon'
            playTurn={this.playTurn}
            />
        </div>
        <div className='presenter'>
          <Presenter turn={this.state.turn}/>
        </div>
      </div>
    );
  }
}

export default App;
