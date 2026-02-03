import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");

  async function fetchSkills() {
    const res = await fetch("http://localhost:5000/api/skills");
    const data = await res.json();
    setSkills(data);
  }

  async function addSkill(e) {
    e.preventDefault();
    await authFetch("http://localhost:5000/api/skills", {
      method: "POST",
      body: JSON.stringify({ name })
    });
    setName("");
    fetchSkills();
  }

  async function deleteSkill(id) {
    await authFetch(`http://localhost:5000/api/skills/${id}`, {
      method: "DELETE"
    });
    fetchSkills();
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div>
      <h2>Manage Skills</h2>

      <form onSubmit={addSkill}>
        <input
          placeholder="New skill"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            {skill.name}
            <button onClick={() => deleteSkill(skill._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSkills;
