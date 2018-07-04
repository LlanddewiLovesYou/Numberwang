import React from 'react';
import './presenter.css'


class Presenter extends React.Component {


  render() {
      return (
        <main className='presenter-wrapper'>
          <div className='presenter-text'>{this.props.saying}</div>
        </main>
      )
  }


}

export default Presenter;
