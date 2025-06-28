import React from 'react';

function Resume() {
  return (
    <section className="container my-5">
      <h1>Resume</h1>
      <p>
        <a 
          href="https://drive.google.com/file/d/15nANdOrMuAisvHPR-IHm2aPEWnfY2yGV/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View/Download My Resume (PDF)
        </a>
      </p>
      {/* Add skills, experience, or education here if you want */}
    </section>
  );
}

export default Resume;