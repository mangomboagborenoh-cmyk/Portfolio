function Projects() {
  const projects = [
    {
      title: "Secondary School Management System",
      description:
"A web-based school management platform that digitizes student records and administrative activities. I contributed to the frontend development and responsive user interface.",
      technologies: "React • JavaScript • CSS",
    },
    {
      title: "MindEase PTSD",
      description:
        "A Cloud Based mental health application designed to provide support and resources for individuals dealing with PTSD.",
      technologies: "JavaScript • HTML • CSS • React • AWS ",
    },
    {
      title: "Smart Traffic Light System",
      description:
        "An intelligent traffic management system that uses sensors to detect vehicle density and automatically adjusts traffic light timing to improve traffic flow and reduce congestion..",
      technologies: "Arduino IDE • ESP32• LEDs",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p>What I've Built</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              0{projects.indexOf(project) + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.technologies}</small>

            <a href="#contact">View Project →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;