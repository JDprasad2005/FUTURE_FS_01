import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminConnect() {
  const [links, setLinks] = useState([]);
  const [form, setForm] = useState({
    platform: "",
    url: "",
    displayText: "",
    actionText: ""
  });

  async function fetchLinks() {
    const res = await fetch("http://localhost:5000/api/connect");
    const data = await res.json();
    setLinks(data);
  }

  async function addLink(e) {
    e.preventDefault();
    await authFetch("http://localhost:5000/api/connect", {
      method: "POST",
      body: JSON.stringify(form)
    });
    setForm({ platform: "", url: "", displayText: "", actionText: "" });
    fetchLinks();
  }

  async function deleteLink(id) {
    await authFetch(`http://localhost:5000/api/connect/${id}`, {
      method: "DELETE"
    });
    fetchLinks();
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div>
      <h2>Manage Connect Links</h2>

      <form onSubmit={addLink}>
        <input placeholder="Platform" value={form.platform}
          onChange={e => setForm({ ...form, platform: e.target.value })} />
        <input placeholder="URL" value={form.url}
          onChange={e => setForm({ ...form, url: e.target.value })} />
        <input placeholder="Display Text" value={form.displayText}
          onChange={e => setForm({ ...form, displayText: e.target.value })} />
        <input placeholder="Action Text" value={form.actionText}
          onChange={e => setForm({ ...form, actionText: e.target.value })} />
        <button>Add</button>
      </form>

      <ul>
        {links.map(l => (
          <li key={l._id}>
            {l.platform}
            <button onClick={() => deleteLink(l._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminConnect;
