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
    this.state = {
      status: 0, // 0 - not-started/paused/stopped, 1 - started, 2 - finished
      seconds: 0,
      timeoutRef: null,
    };
    this.startTimer = this.startTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }
  startTimer() {
    const { status } = this.state;
    if (status === 0) {
      const interval = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1,
          timeoutRef: interval,
          status: 1,
        });
      }, 1000);
    } else if (status === 1) {
      clearInterval(this.state.timeoutRef);
      this.setState({
        status: 0,
      });
    }
  }
  clearTimer() {
    clearInterval(this.state.timeoutRef);
    this.setState({
      status: 0,
      seconds: 0,
      timeoutRef: null,
    });
  }
  render() {
    let { seconds: totalSeconds, status } = this.state;
    const minutesPassed = Math.floor(totalSeconds / 60);
    totalSeconds -= minutesPassed;

    return (
      <div>
        <h2>Stop Watch</h2>
        <h3>{minutesPassed}: {totalSeconds}</h3>
        <button onClick={this.startTimer}>{status === 0 ? 'Start' : 'Stop'}</button>
        <button onClick={this.clearTimer}>Clear</button>

      </div>
    );
  }
}

export default StopWatch;
