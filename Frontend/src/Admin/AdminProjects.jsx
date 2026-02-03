import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    githubLink: "",
    liveLink: ""
  });

  async function fetchProjects() {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  }

  async function addProject(e) {
    e.preventDefault();
    await authFetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: JSON.stringify(form)
    });
    setForm({ title: "", description: "", githubLink: "", liveLink: "" });
    fetchProjects();
  }

  async function deleteProject(id) {
    await authFetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE"
    });
    fetchProjects();
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Manage Projects</h2>

      <form onSubmit={addProject}>
        <input placeholder="Title" value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="GitHub Link" value={form.githubLink}
          onChange={e => setForm({ ...form, githubLink: e.target.value })} />
        <input placeholder="Live Link" value={form.liveLink}
          onChange={e => setForm({ ...form, liveLink: e.target.value })} />
        <button>Add Project</button>
      </form>

      <ul>
        {projects.map(p => (
          <li key={p._id}>
            {p.title}
            <button onClick={() => deleteProject(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProjects;
