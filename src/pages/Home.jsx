
import React, { useState } from "react";
import { Send, Mic, Image } from "lucide-react";

const Home = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] rounded-xl overflow-hidden backdrop-blur-md bg-purple-900/20 border border-white/10">
      <div className="p-6 flex justify-between items-center">
        <div></div>
        <div className="font-mono text-3xl text-white/80">AVA</div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        {/* This would be where chat messages appear */}
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full px-4 py-3 bg-gradient-to-r from-red-900/30 to-orange-700/30 rounded-full text-white placeholder-white/50 border border-white/10 pr-24 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
            <button type="button" className="text-white/70 hover:text-white p-1">
              <Mic size={18} />
            </button>
            <button type="button" className="text-white/70 hover:text-white p-1">
              <Image size={18} />
            </button>
            <button type="submit" className="text-white/70 hover:text-white p-1">
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
