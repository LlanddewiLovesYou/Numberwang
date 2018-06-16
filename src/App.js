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
      numberwang: false
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.numberwang ? <Modal phrase="That's Numberwang!"/> : null }
        <img src={Logo} className='logo'/>
        <Board className='board'/>
        <div className='contestant-1'>
          <Contestant src={JulieImg} name='Julie'/>
        </div>
        <div className='contestant-2'>
          <Contestant src={SimonImg} name='Simon'/>
        </div>
        <div className='presenter'>
          <Presenter />
        </div>
      </div>
    );
  }
}

export default App;
