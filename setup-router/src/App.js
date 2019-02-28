import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Main />
      </Fragment>
    );
  }
}

// const App = () => (
//   <div>
//     <Navbar />
//     <Header />
//     <Main />
//   </div>
// )


export default App;
