import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from './components/NotFound';

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
