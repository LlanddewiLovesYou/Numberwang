import React from 'react';
import './presenter.css'


class Presenter extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {numberwang: '', turn: 'Julie', response: 'I once ate 18 cakes'}
    // this.takeTurn = this.takeTurn.bind(this)
  }

  takeTurn() {
    this.state.turn === 'Julie' ? this.setState({turn: "Simon"}) : this.setState({turn: "Julie"})
  }

  render() {
    return (
      <main className='presenter-wrapper'>
        <div className='presenter-text'>{this.props.turn}?</div>
      </main>
    )
  }


}

export default Presenter;
