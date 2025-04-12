
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] rounded-xl overflow-hidden backdrop-blur-md bg-purple-900/20 border border-white/10 justify-center items-center">
      <h1 className="text-5xl font-mono text-white mb-4">404</h1>
      <p className="text-white/70 mb-8">Page not found</p>
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-md text-white hover:bg-white/20 transition-colors"
      >
        <Home size={18} />
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
