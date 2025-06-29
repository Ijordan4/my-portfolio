import React from 'react';

function AboutMe() {
  return (
    <section className="container my-5">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + '/assets/me.jpg'}
            alt="Isaiah's Profile"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <p>
            Hi, I’m Isaiah — a passionate QA game tester with real-world experience
            playtesting pre-release titles for studios like EA, Ubisoft, and Activision. Over
            the last few years, I’ve provided detailed gameplay feedback for games like UFC,
            F1, NHL, Call of Duty, and MLB The Show.
            <br />
            <br />
            I’m deeply familiar with testing for bugs, balancing issues, UI feedback, and player
            experience across platforms. I also have foundational skills in web development and
            team collaboration through Git. I’m actively seeking a remote QA tester role or
            internship where I can contribute meaningfully to the development process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;