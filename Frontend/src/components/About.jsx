import './About.css';

function About() {
  const tags = ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Express', 'CSS'];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>
          
          <div className="about-text">
            <p>
              I am a student and aspiring full stack developer who enjoys building
              web applications and learning new technologies.
            </p>
            
            <div className="about-tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;