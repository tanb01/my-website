import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../home";
import NoMatch from "../noMatch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Bob is currently building the site...</h1>
      </React.Fragment>
    );
  }
}

export default App;
