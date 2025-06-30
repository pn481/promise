// client/src/pages/Post.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Failed to load post", err));
  }, [id]);

  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {post.author} on {new Date(post.date).toDateString()}</p>
      <div className="text-lg text-gray-800 whitespace-pre-line">{post.content}</div>
    </div>
  );
}
