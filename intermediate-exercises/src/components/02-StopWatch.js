import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      timeLapse: 0,
      start: 0,
      isRunning: false,
      isPaused: false,
    };
  }

  startTimer = () => {
    this.setState({
      isRunning: true,
      timeLapse: this.state.timeLapse,
      start: Date.now() - this.state.timeLapse
    })
    this.timer = setInterval(() => this.setState({
      timeLapse: Date.now() - this.state.start
    }), 1);
  }

  handleOnClick = () => {
    const { isRunning, isPaused } = this.state;
    if(!isRunning && !isPaused) {
      this.startTimer();
    } else if(isRunning && !isPaused){
      clearInterval(this.timer)
      this.setState({isRunning:false, isPaused: true})
    }
  }

  handleClear = () => {
    this.setState({isRunning:false, isPaused: false, timeLapse: 0})
  }

  render() {
    const { isRunning, timeLapse } = this.state;
    return (
      <React.Fragment>
        <h1>{timeLapse}</h1>
        <Button isRunning={isRunning} handleOnClick={this.handleOnClick}   />
        <button name='clear' onClick={this.handleClear}>
          Clear
        </button>
      </React.Fragment>
    );
  }
}

class Button extends Component {
  render() {
    const { isRunning, handleOnClick } = this.props;
    return (
      <button name='stopwatch' onClick={handleOnClick}>
      { isRunning ? 'Stop': 'Start'}
      </button>
    );
  }
}

export default StopWatch;
