// client/src/pages/CreatePost.jsx
import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "My Week in Code: A Journey Through Frustration and Determination",
    content: `This week, I was faced with a challenge that pushed me to my limits: building a full-stack MERN blog application...
    
    ...I may not be there *yet*, but I’m definitely not where I started, What started as an exciting opportunity quickly turned into a week filled with stress, late nights, and moments where I seriously thought about quitting.

As someone still learning to navigate the world of full-stack development, I knew this wouldn't be easy. But I didn’t expect to spend days staring at errors, broken components, and a terminal that felt more like an enemy than a friend..`,
    image: "https://via.placeholder.com/800x400.png?text=My+Coding+Week",
    author: "Promise",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/posts", form);
      alert("Post created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating post.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Title"
        />
        <textarea
          name="content"
          rows={10}
          value={form.content}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Content"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Image URL"
        />
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Author"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

