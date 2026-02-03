import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    techStack: "",
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

    const payload = {
      ...form,
      techStack: form.techStack.split(",")
    };

    await authFetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: JSON.stringify(payload)
    });

    setForm({
      title: "",
      description: "",
      image: "",
      techStack: "",
      githubLink: "",
      liveLink: ""
    });

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
        <input placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} />

        <textarea placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })} />

        <input placeholder="Image URL or /project1.jpg"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })} />

        <input placeholder="Tech stack (comma separated)"
          value={form.techStack}
          onChange={e => setForm({ ...form, techStack: e.target.value })} />

        <input placeholder="GitHub link"
          value={form.githubLink}
          onChange={e => setForm({ ...form, githubLink: e.target.value })} />

        <input placeholder="Live site link"
          value={form.liveLink}
          onChange={e => setForm({ ...form, liveLink: e.target.value })} />

        <button>Add Project</button>
      </form>

      <hr />

      {projects.map(p => (
        <div key={p._id}>
          <strong>{p.title}</strong>
          <button onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminProjects;
