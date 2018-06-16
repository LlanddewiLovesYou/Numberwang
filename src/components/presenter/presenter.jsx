import React from 'react';
import './presenter.css'


class Presenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {numberwang: '', turn: ['Julie', 'Simon'], response: 'I once ate 18 cakes'}
    // this.numberwang = ''
    this.turn = ['Julie', 'Simon']
    // this.response = 'I once ate 18 cakes'
  }

  render() {
    return (
      <main className='presenter-wrapper'>
        <div className='presenter-text'>{this.state.response}</div>
      </main>
    )
  }


}

export default Presenter;
