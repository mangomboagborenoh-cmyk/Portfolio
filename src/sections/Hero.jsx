import profileImage from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Mangombo <span>Obidonk</span> <span> Agborenoh</span>
        </h1>

        <h2>Software Engineering Student & Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly digital experiences
          while exploring mobile development and cloud technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-glow"></div>

        <img src={profileImage} alt="Mangombo Obidonk" />
      </div>
    </section>
  );
}

export default Hero;