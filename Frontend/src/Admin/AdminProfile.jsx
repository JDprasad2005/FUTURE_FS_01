import { useEffect, useState } from "react";
import { authFetch } from "../utils/AuthFetch";

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    description: "",
    email: "",
    resumeUrl: "",
    aboutText: "",
    profileImage: "",
    tags: []
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

  function handleTagChange(e) {
    const value = e.target.value;
    setProfile({ ...profile, tags: value.split(",") });
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Edit Profile</h2>

      <form onSubmit={saveProfile}>
        <input
          placeholder="Name"
          value={profile.name}
          onChange={e => setProfile({ ...profile, name: e.target.value })}
        />

        <input
          placeholder="Title"
          value={profile.title}
          onChange={e => setProfile({ ...profile, title: e.target.value })}
        />

        <textarea
          placeholder="Hero Description"
          value={profile.description}
          onChange={e => setProfile({ ...profile, description: e.target.value })}
        />

        <input
          placeholder="Email"
          value={profile.email}
          onChange={e => setProfile({ ...profile, email: e.target.value })}
        />

        <input
          placeholder="Resume URL (e.g. /resume.pdf)"
          value={profile.resumeUrl}
          onChange={e => setProfile({ ...profile, resumeUrl: e.target.value })}
        />

        <input
          placeholder="Profile Image URL (e.g. /profile.jpg)"
          value={profile.profileImage}
          onChange={e =>
            setProfile({ ...profile, profileImage: e.target.value })
          }
        />

        <textarea
          placeholder="About Me Text"
          value={profile.aboutText}
          onChange={e => setProfile({ ...profile, aboutText: e.target.value })}
        />

        <input
          placeholder="Tags (comma separated)"
          value={profile.tags.join(",")}
          onChange={handleTagChange}
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default AdminProfile;
