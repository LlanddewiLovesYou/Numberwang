import React, {PropTypes} from 'react';
import './youtube.css'

class Youtube extends React.Component {


  render() {
    return (
      <div className='youtube-container'>
        <div className='youtube-header'>
          Welcome to Numberwang! The Maths Quiz That's Simply Everyone &copy;
        </div>
        <div className='youtube-copy'>
          Unfamiliar with Numberwang? Watch the video below to familiarize yourself
          with some <a href='http://mirror.uncyc.org/wiki/Numberwang' target='_blank'>simple rules</a>.
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0obMRztklqU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <br/>
          Finshed with the video or just wanting to dive right in?
        </div>
        <button className='youtube-button' onClick={() => this.props.start()}>Let's Numberwang!</button>
      </div>
    );
  }
}

Youtube.propTypes = {
};

export default Youtube;
