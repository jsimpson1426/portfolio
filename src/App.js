import React, { Component } from "react";
import "./App.sass";
import Landing from "./components/portfolio/landing/landing";
import About from "./components/portfolio/about/about";
import Projects from "./components/portfolio/projects/projects";
import Contact from "./components/portfolio/contact/contact";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Landing id="landing" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    );
  }
}

export default App;
