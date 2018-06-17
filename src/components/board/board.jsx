import React from 'react';
import './board.css'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.boardNumbers = this.createBoardNums()
    // this.state = {
    //   rerender: this.props.reRender
    // }
  }

  randomIntFromInterval(min,max){
      return Math.random()*(max-min+1)+min
  }

  createBoardNums() {
    let boardNums = []
    let counter = 0
    while (counter < 13) {
      if (counter === 7 || counter === 5 || counter === 12) {
        boardNums.push(this.randomIntFromInterval(-100, 500).toFixed(1))
        counter ++
      } else {
        boardNums.push(Math.floor(this.randomIntFromInterval(-100, 500)))
        counter ++
      }
    }
      return boardNums
  }

randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

  componentWillReceiveProps(newProps) {
    if (this.props.reRender !== newProps.reRender) {
      this.boardNumbers = this.createBoardNums()

    }
  }

  render() {
    return (
      <main className='board-wrapper'>

        <div className='full-board'>
          <div className='board-num-1'>{this.boardNumbers[0]}</div>
          <div className='board-num-2'>{this.boardNumbers[1]}</div>
          <div className='board-num-3'>{this.boardNumbers[2]}</div>
          <div className='board-num-4'>{this.boardNumbers[3]}</div>
          <div className='board-num-5'>{this.boardNumbers[4]}</div>
          <div className='board-num-6'>{this.boardNumbers[5]}</div>
          <div className='board-num-7'>{this.boardNumbers[6]}</div>
          <div className='board-num-8'>{this.boardNumbers[7]}</div>
          <div className='board-num-9'>{this.boardNumbers[8]}</div>
          <div className='board-num-10'>{this.boardNumbers[9]}</div>
          <div className='board-num-11'>{this.boardNumbers[10]}</div>
          <div className='board-num-12'>{this.boardNumbers[11]}</div>
          <div className='board-num-0'>{this.boardNumbers[12]}</div>
        </div>
      </main>
    )
  }


}

export default Board;

// <span>{this.boardNumbers}</span>
