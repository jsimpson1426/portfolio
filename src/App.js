import React, { Component } from "react";
import "./App.sass";
import Landing from "./components/portfolio/landing/landing";
import About from "./components/portfolio/about/about";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
