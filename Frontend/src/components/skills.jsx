import { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://my-porfolio-6sf0.onrender.com/api/skills")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Failed to load skills", err));
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">SKILLS / STACK</h2>

        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill._id}>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
