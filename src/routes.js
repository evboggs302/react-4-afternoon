import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Switch, Route } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}
