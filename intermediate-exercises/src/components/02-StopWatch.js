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

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Stopwatch</h1>
        <StopWatch />
     </div>
    );
  }
}

class StopWatch extends Component {
  state = {
    status : false,
    time : 0
  };

  handleClick = () => {
    this.setState({time : 5, status: true})
  }

  resetButton = () => {
    this.setState({time : 0, status: false});
  }
  render() {
    const { status, time } = this.state;
    return (
      <div>
        <p>{time}ms</p>
        <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button onClick={this.resetButton}>Reset</button>
      </div>
    )
  }
}

export default App;
