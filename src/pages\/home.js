import React from "react";

function Home() {
  return (
    <div>
      <h1>Pulgam Samith Reddy</h1>

      <img 
        src="/profile.jpg" 
        alt="Profile" 
        width="150"
        style={{ borderRadius: "50%" }}
      />

      <h2>About Me</h2>
      <p>
        I am a B.Tech Computer Science student at Mahindra University with
        interests in Machine Learning, Artificial Intelligence, and problem solving.
      </p>

      <h2>Research Interests</h2>
      <ul>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
      </ul>

      <h2>Personal Details</h2>
      <p>Email: samithreddypulgam@gmail.com</p>
      <p>College Email: se23ucse146@mahindrauniversity.edu.in</p>

      <h2>Skills</h2>
      <ul>
        <li>Languages: C, C++, Python, Java, JavaScript</li>
        <li>Web: HTML, CSS</li>
        <li>Database: SQL</li>
        <li>Tools: Git, VS Code</li>
      </ul>
    </div>
  );
}

export default Home;