import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/aboutme">Isaiah Jordan</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/aboutme">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;