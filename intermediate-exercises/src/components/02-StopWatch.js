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
      button: false,
      timer: 0,
      startTime: 0,
    };
  }
  toggle() {
    const buttonState = this.state.button;
    if (this.state.timer === 0 && !buttonState) {
      this.setState({ startTime: Date.now() });
    }
    if (!buttonState) {
      let interval = setInterval(() => {
        this.setState({ timer: (Date.now() - this.state.startTime) });
      });
      this.setState({ interval: interval });
    }
    if (buttonState) {
      clearInterval(this.state.interval);
    }
    this.setState({ button: !buttonState });
  }


  render() {
    return (
      <div>
        Stop Watch
          <hr />
        {this.state.timer}
        <hr />
        <button onClick={this.toggle.bind(this)}>{this.state.button ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default StopWatch;
