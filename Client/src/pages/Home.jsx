// client/src/pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error("Failed to fetch posts", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">📚 My Blog</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link
            to={`/post/${post._id}`}
            key={post._id}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="rounded mb-4 w-full h-60 object-cover" />
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">By {post.author} • {new Date(post.date).toDateString()}</p>
            <p className="text-gray-700 line-clamp-3">{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
