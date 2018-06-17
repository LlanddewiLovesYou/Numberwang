import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board/board.jsx'
import Modal from './components/modal/modal.jsx'
import Contestant from './components/contestant/contestant.jsx'
import Presenter from './components/presenter/presenter.jsx'
import Logo from './assets/numberwanglogo.png'
import JulieImg from './assets/julie.jpg'
import SimonImg from './assets/simon.jpg'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberwang: false,
      turn: "Julie",
      reRenderBoard: 0
    }
    this.playTurn = this.playTurn.bind(this)
  }

  playTurn() {
    this.displayModal()
    this.takeTurn()
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
  }

  displayModal() {
    let boolean = this.isItNumberwang()
    console.log(boolean)
    this.setState({numberwang: boolean})
    setTimeout(() => this.setState({numberwang: false}), 1000)
  }

  render() {
    return (
      <div className="App">
        { this.state.numberwang ? <Modal phrase="That's Numberwang!"/> : null }
        <img src={Logo} className='logo'/>
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
