import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project.sass";

class Project extends Component {
  state = {};
  render() {
    let { content } = this.props;
    return (
      <div className="project-div-bg1">
        <div className="project-div-bg2">
          <div className="project-div-container">
            <h2 className="project-h2">{content.title}</h2>
            <ul className="project-ul">
              <li className="project-li-left">
                <img
                  className="project-img"
                  alt={content.alt}
                  src={content.imgUrl}
                />
              </li>
              <li className="project-li-right">
                <p className="project-p">{content.description}</p>
                <div className="project-div-buttons">
                  <a className="project-a" href={content.projectUrl} target="_blank" hidden={content.projectUrl === "NA" ? true : false}>
                    View
                  </a>
                  <a className="project-a" href={content.githubUrl} target="_blank" hidden={content.githubUrl === "NA" ? true : false}>
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
