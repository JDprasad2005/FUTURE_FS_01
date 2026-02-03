import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    description: "",
    email: ""
  });

  async function fetchProfile() {
    const res = await fetch("http://localhost:5000/api/profile");
    const data = await res.json();
    if (data) setProfile(data);
  }

  async function saveProfile(e) {
    e.preventDefault();
    await authFetch("http://localhost:5000/api/profile", {
      method: "POST",
      body: JSON.stringify(profile)
    });
    alert("Profile saved");
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={saveProfile}>
        <input placeholder="Name" value={profile.name}
          onChange={e => setProfile({ ...profile, name: e.target.value })} />

        <input placeholder="Title" value={profile.title}
          onChange={e => setProfile({ ...profile, title: e.target.value })} />

        <textarea placeholder="Description" value={profile.description}
          onChange={e => setProfile({ ...profile, description: e.target.value })} />

        <input placeholder="Email" value={profile.email}
          onChange={e => setProfile({ ...profile, email: e.target.value })} />

        <button>Save</button>
      </form>
    </div>
  );
}

export default AdminProfile;
