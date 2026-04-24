import React from "react";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      <div>
        <h3>Student Exam Performance Prediction</h3>
        <p>
          Built ML models using ID3, C4.5, and CART algorithms to predict student performance.
        </p>
        <a href="https://github.com/Samithreddy8/project1" target="_blank">
          View on GitHub
        </a>
      </div>

      <hr />

      <div>
        <h3>HR Analytics: Employee Attrition & Salary Prediction</h3>
        <p>
          Developed classification and regression models to predict attrition
          and forecast salary trends using Python and ML techniques.
        </p>
        <a href="https://github.com/Samithreddy8/project2" target="_blank">
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default Projects;