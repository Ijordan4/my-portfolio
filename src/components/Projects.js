import React from 'react';

function Projects() {
  return (
    <section className="container my-5 projects">
      <h1>Portfolio Highlights</h1>

      <div className="project">
        <h3>🎮 Game Testing Experience</h3>
        <ul>
          <li>UFC 5 – Gameplay Tester, EA</li>
          <li>F1 24 – Beta Tester, Codemasters/EA</li>
          <li>NHL 24 – Remote Tester, EA</li>
          <li>MLB The Show (22–24) – Feedback Contributor, Sony San Diego</li>
        </ul>
      </div>

      <div className="project">
        <h3>💻 Development Projects</h3>
        <h4>Marvel Flicks</h4>
        <p>
          A collaborative web app using OMDB & YouTube APIs. Users can search
          for any Marvel movie to get trailers, reviews, and ratings.
        </p>
        <a href="https://jheeebert.github.io/marvel-flicks/" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </section>
  );
}

export default Projects;
