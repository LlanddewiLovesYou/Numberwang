import React, {PropTypes} from 'react';
import '../youtube/youtube.css'

export default class GameOver extends React.Component {
  render() {
    return (
      <div className='youtube-container'>
        <div className='youtube-header'>
          Well I'm sure that was fun!
        </div>
        <div className='youtube-copy'>
          Why on earth did I do this? I made this recreation of the 'game' NumberWang as
          an experiement in complex DOM manipulation and CSS animations. The 'rules' as
          you probably gathered are not all that important and are mostly based on random
          chance, however that randomness provides just enough structure to do some really
          cool things to the virtual DOM as I hope I have done here.
          <br/>
          <br/>
          If you're interested in more about what in the heck Numberwang actually is please watch <a href='https://www.youtube.com/watch?v=zJDu5D_IXbc&list=PL58691C0469CA3F54'>this playlist</a> on
          Youtube. It truly is a case where the more you know the joke the funnier
          it gets. Otherwise, Numberwang might be close to torture.
          <br/>
          <br/>
          Play again?
        </div>
        <button className='youtube-button' onClick={() => window.location.reload()}>Let's Numberwang!</button>
      </div>
    );
  }
}
GameOver.propTypes = {
};
