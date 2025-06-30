// client/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Promise's Blog. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/create" className="hover:underline">Create Post</a>
        </div>
      </div>
    </footer>
  );
}
