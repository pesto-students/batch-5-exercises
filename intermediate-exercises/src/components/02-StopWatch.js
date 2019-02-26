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
  state = {
    time: '00:00',
    on: false
  };

  clearTimer = () => {
    clearInterval(this.interval);
    this.setState({ time: '00:00' });
  }

  start = () => {
    this.setState({ on: true });
    this.interval = setInterval(this.increment, 1000);
  }

  stop = () => {
    this.setState({ on: false });
    clearInterval(this.interval);
  }

  increment = () => {
    //this.setState({ time: this.state.time + 1 });
    let { time } = this.state;
    let timeList = time.split(':').map(Number);
    console.log(timeList);
    let [min, sec] = timeList;
    if (sec == 59) {
      if (min == 59) {
        this.setState({ time: '00:00' });
      }
      else {
        min += 1;
        sec = '00';
        let timerStamp = [String(min), sec].join(':');
        if (timerStamp.length < 5) {
          timerStamp = '0' + timerStamp;
        }
        this.setState({ time: timerStamp });
      }
    }
    else {
      sec += 1;
      let secStamp = String(sec);
      let minStamp = String(min);
      if (secStamp.length < 2) {
        secStamp = '0' + secStamp;
      }
      if (minStamp.length < 2) {
        minStamp = '0' + minStamp;
      }
      let timerStamp = [minStamp, secStamp].join(':');
      this.setState({ time: timerStamp });
    }
  }

  toggleTimer = () => {
    if (!this.state.on) {
      this.start();
    }
    else {
      this.stop();
    }
  }

  render() {
    return (
      <div>
        <div>Stop Watch</div>
        {this.state.time}
        <br />
        <button onClick={this.toggleTimer}>{this.state.on ? 'Stop' : 'Start'}</button>
        <button onClick={this.clearTimer}>clear Timer</button>
      </div>
    );
  }
}

export default StopWatch;
