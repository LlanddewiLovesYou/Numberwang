import React from 'react';
import './modal.css'


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {phrase: 'That\'s Numberwang!'}
  }



  render() {
    return (
      <main className='wangmodal'>
        <div className='wangphrase'>{this.props.phrase}</div>
      </main>
    )
  }

}




export default Modal;
