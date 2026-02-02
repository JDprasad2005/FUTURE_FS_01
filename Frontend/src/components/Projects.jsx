import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/project1.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.com"
    },
    {
      title: "Task Manager App",
      description: "A productivity app to manage tasks with drag-and-drop functionality and real-time updates.",
      image: "/project2.jpg",
      techStack: ["React", "Firebase", "CSS"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that shows current weather and 5-day forecast using OpenWeather API.",
      image: "/project3.jpg",
      techStack: ["JavaScript", "API", "CSS"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                    GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;