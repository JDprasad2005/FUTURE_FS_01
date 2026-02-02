import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-name">Your Name</h1>
        <p className="hero-title">Full Stack Developer</p>
        <p className="hero-description">
          Building modern web applications with React, Node.js & MongoDB
        </p>
        <div className="hero-buttons">
          <a  className="btn btn-primary">Email me</a>
          <a href="/resume.pdf" className="btn btn-secondary" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;