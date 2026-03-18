"use client";
import { useState, useEffect } from "react";

export default function SettingsForm() {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [theme, setTheme] = useState("light");

  // Load settings
  useEffect(() => {
    fetch("/api/user/settings")
      .then((res) => res.json())
      .then((data) => {
        setPostsPerPage(data.postsPerPage);
        setTheme(data.theme);
      });
  }, []);

  // Save settings
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/user/settings", {
      method: "POST",
      body: JSON.stringify({ postsPerPage, theme }),
    });

    alert("Saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Settings</h2>

      <div>
        <label>Posts per page:</label>
        <input
          type="number"
          value={postsPerPage}
          onChange={(e) => setPostsPerPage(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
