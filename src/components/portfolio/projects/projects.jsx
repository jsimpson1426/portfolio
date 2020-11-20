import React from "react";
import Project from "./../project/project";
import "./projects.sass";
import SectionHeader from "../../common/sectionHeader/sectionHeader";

const Projects = ({ id }) => {
  const projects = [
    {
      alt: "SudokuSolver",
      title: "Sudoku Puzzle Solver",
      imgUrl: "https://media.giphy.com/media/WMW8LiACBqtvL57xOK/giphy.gif",
      description:
        "I used this project as a way to better understand backtracking algorithms. This project takes a solveable sudoku puzzle and fills in the blanks to find the correct answer!",
      projectUrl: "https://whispering-harbor-44271.herokuapp.com/",
      githubUrl: "https://github.com/jsimpson1426/sudoku-solver",
    },
    {
      alt: "Quick-Ref",
      title: "Quick-Ref App",
      imgUrl: "https://media.giphy.com/media/GUuvepxD5L6fp4j7n6/giphy.gif",
      description:
        "Quick-Ref is a content delivery app for reference material. Individuals with admin permissions may create, edit and delete materials and users can log in to access the content. This app is in progress and not yet complete. The front-end is funtional, but not every feature is complete.",
      projectUrl: "https://sleepy-fortress-68982.herokuapp.com/",
      githubUrl: "https://github.com/jsimpson1426/quick-ref",
    }
    // {
    //   alt: "At Action Studios",
    //   title: "At Action Studios",
    //   imgUrl: require("./placeholder.png"),
    //   description:
    //     "I work with At Action studios to build a website for the comics that they write.",
    //   projectUrl: "linkPlaceholder",
    //   githubUrl: "linkPlaceholder",
    // },
  ];

  return (
    <div className="projects-div-container">
      <SectionHeader id={id} text="Projects"></SectionHeader>
      {projects.map((p) => (
        <div key={p.title} className="projects-div-section">
          <Project key={p.title} content={p} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
