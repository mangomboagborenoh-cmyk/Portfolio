function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p>Get To Know Me</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>I'm a passionate developer and Software Engineering Student from Cameroon.</h3>

          <p>
            I'm a Software Engineering student passionate about building
            technology that solves real-world problems. I enjoy turning
            ideas into functional and beautiful digital products.
          </p>

          <p>
            My interests include web development, mobile application
            development and cloud technologies. I'm constantly learning,
            experimenting and working on projects that help me grow as a
            developer.
          </p>

          <a href="/resume.pdf" className="primary-button" download>
            Download Resume
          </a>
        </div>

        <div className="about-card">
          <div>
            <strong>2027</strong>
            <span>Expected Graduation🎓 </span>
          </div>

          <div>
            <strong>Frontend</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>Mobile</strong>
            <span>Development</span>
          </div>

          <div>
            <strong>Cloud</strong>
            <span>Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;