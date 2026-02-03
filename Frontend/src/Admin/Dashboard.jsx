import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <ul>
        <li><Link to="/admin/profile">Edit Profile</Link></li>
        <li><Link to="/admin/skills">Manage Skills</Link></li>
        <li><Link to="/admin/projects">Manage Projects</Link></li>
        <li><Link to="/admin/connect">Manage Connect Links</Link></li>

      </ul>
    </div>
  );
}

export default Dashboard;
