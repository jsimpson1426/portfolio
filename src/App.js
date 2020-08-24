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
        <div className="app-section">
          <Landing id="landing" />
        </div>
        <div className="app-section">
          <About id="about" />
        </div>
        <div className="app-section">
          <Projects id="projects" />
        </div>
        <div className="app-section">
          <Contact id="contact" />
        </div>
      </div>
    );
  }
}

export default App;
