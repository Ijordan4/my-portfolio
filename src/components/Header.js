import React from 'react';

function Header() {
  return (
    <header className="container text-center my-5">
      <img
        src={process.env.PUBLIC_URL + '/assets/me.jpg'}
        alt="Isaiah Jordan"
        className="img-fluid rounded-circle mb-3"
        style={{ maxWidth: '140px', border: '3px solid #007bff' }}
      />
      <h1 className="mt-3">Isaiah Jordan</h1>
      <span className="badge bg-primary mb-2">QA Game Tester & Web Enthusiast</span>
      <p>
        Welcome! I’m passionate about game testing, web development, and collaborating with creative teams.
      </p>
      <div className="mb-3">
        <a href="mailto:isaiahjordan200@gmail.com" className="mx-2" title="Email">
          <i className="fas fa-envelope fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/isaiah-jordan-0502241a2/" target="_blank" rel="noopener noreferrer" className="mx-2" title="LinkedIn">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/Ijordan4" target="_blank" rel="noopener noreferrer" className="mx-2" title="GitHub">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="https://www.youtube.com/@NotThatTacticalGamer" target="_blank" rel="noopener noreferrer" className="mx-2" title="YouTube">
          <i className="fab fa-youtube fa-lg"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/15nANdOrMuAisvHPR-IHm2aPEWnfY2yGV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          title="Resume"
        >
          <i className="fas fa-file-alt fa-lg"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;