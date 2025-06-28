import React from 'react';

function Footer() {
  return (
    <footer className="container my-5 text-center">
      <hr />
      <p>
        <a href="mailto:isaiahjordan200@gmail.com" title="Email">
          <i className="fas fa-envelope"></i> Email
        </a> |{' '}
        <a href="https://www.youtube.com/@NotThatTacticalGamer" target="_blank" rel="noopener noreferrer" title="YouTube">
          <i className="fab fa-youtube"></i> YouTube
        </a> |{' '}
        <a href="https://www.linkedin.com/in/isaiah-jordan-0502241a2/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a> |{' '}
        <a href="https://github.com/Ijordan4" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i> GitHub
        </a>
      </p>
      <p>
        <small>Based in Charlotte, NC &mdash; QA Game Tester &amp; Web Enthusiast</small>
      </p>
      <p>
        <a href="#top">Back to top</a>
      </p>
      <small>&copy; {new Date().getFullYear()} Isaiah Jordan</small>
    </footer>
  );
}

export default Footer;