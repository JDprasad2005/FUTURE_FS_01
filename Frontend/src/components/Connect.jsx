import './Connect.css';

function Connect() {
  return (
    <section className="connect" id="connect">
      <h2 className="connect-title">Connect / Get in Touch</h2>

      <div className="connect-grid">
        {/* Email Card */}
        <a href="mailto:adinahawaldar895@gmail.com" className="connect-card">
          <div className="card-icon email-icon">📧</div>
          <div className="card-content">
            <h3>Email</h3>
            <p className="card-id">adinahawaldar895@gmail.com</p>
            <span className="card-action">Send message</span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a href="https://linkedin.com/in/adinahawaldar" target="_blank" rel="noopener noreferrer" className="connect-card">
          <div className="card-icon linkedin-icon">💼</div>
          <div className="card-content">
            <h3>LinkedIn</h3>
            <p className="card-id">in/adinahawaldar</p>
            <span className="card-action">Connect</span>
          </div>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/adina" target="_blank" rel="noopener noreferrer" className="connect-card">
          <div className="card-icon github-icon">🐙</div>
          <div className="card-content">
            <h3>GitHub</h3>
            <p className="card-id">@adina</p>
            <span className="card-action">View code</span>
          </div>
        </a>

        {/* Twitter/X Card */}
        <a href="https://twitter.com/adina" target="_blank" rel="noopener noreferrer" className="connect-card">
          <div className="card-icon twitter-icon">🐦</div>
          <div className="card-content">
            <h3>Twitter</h3>
            <p className="card-id">@adina</p>
            <span className="card-action">Follow</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Connect;