function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Cloud",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p>What I Work With</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <div className="skill-icon">✦</div>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;