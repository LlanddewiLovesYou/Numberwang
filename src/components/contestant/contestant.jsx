import React, {PropTypes} from 'react';
import './contestant.css'
import avatar from './avatar.png'


export default class Contestant extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: false,
      julie: false,
      simon: false
    }
    this.handleNameSubmit = this.handleNameSubmit.bind(this)
  }

  handleNameSubmit() {
    this.refInput.value = ''
    this.props.signIn()
    this.setState({name: true})
  }

  handleNumberSubmit() {
    this.refInput.value = ''
    this.props.playTurn()
  }

  render() {
    return (
      <div className='contestant-container'>
        {this.state.name ? <img src={this.props.src} className="contestant-image"/> : <img src={avatar} className="contestant-image"/> }
        {this.state.name ? <div className='contestant-name'>{this.props.name} <div className='contestant-from'>from {this.props.hometown}</div></div> : <div className='contestant-name'>???? <div className='contestant-from'>from ????</div></div> }
        {this.state.name ?
          <div className='contestant-info-form'>
            <input ref={(input) => this.refInput = input } placeholder='Enter number here!' ></input>
            <button className='contestant-button' onClick={() => this.handleNumberSubmit()}>Is it Numberwang?</button>
          </div>
           :
          <div className='contestant-info-form'>
            <input ref={(input) => this.refInput = input } placeholder='Enter name here!'></input>
            <div className='contestant-from'>from</div>
            <input placeholder='Enter hometown here!'></input>
            <button className='contestant-button' onClick={this.handleNameSubmit}>Let's Wang!</button>
          </div>
        }
      </div>
    );
  }
}

Contestant.propTypes = {
};
