import React, { Component, Fragment } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  handelClick = () => {
    this.setState({ on: !this.state.on });
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ input: e.currentTarget.value });
  }

  handleStrings = (str) => {
    return str.length !== 0;
  }

  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button className="button-state" onClick={this.handelClick}>{this.state.on ? 'Yes!' : 'No!'}</button>
        <h2>{this.state.input}</h2>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
      </div>
    );
  }
}

export class Link extends Component {

  render() {
    if (this.props.hide) {
      return null;
    }
    return (<a href={this.props.address || ''}>Click Me</a>);

  }
}

export default App;
