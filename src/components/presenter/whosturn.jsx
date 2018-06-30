import React, {PropTypes} from 'react';

export default class WhosTurn extends React.Component {
  render() {
    return (
      <main className='presenter-wrapper'>
        <div className='presenter-text'>{this.props.turn}?</div>
      </main>

    );
  }
}
