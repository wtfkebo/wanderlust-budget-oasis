
import React, { useState } from "react";
import { Upload, MapPin, FileText, Sparkles } from "lucide-react";

const VoyageVibes = () => {
  const [location, setLocation] = useState("");
  const [travelNote, setTravelNote] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Travel memory:", { location, travelNote, hasImage: !!selectedImage });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] rounded-xl overflow-hidden backdrop-blur-md bg-purple-900/20 border border-white/10">
      <div className="p-6 flex justify-between items-center">
        <div></div>
        <div className="font-mono text-3xl text-white/80">VOYAGE VIBES</div>
      </div>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="bg-red-900/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-orange-200 text-xl mb-6 font-mono">Travel Photo</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-2 border-dashed border-orange-300/30 rounded-lg p-8 text-center cursor-pointer hover:border-orange-300/50 transition-colors">
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Preview" className="max-h-40 mx-auto rounded" />
                  ) : (
                    <div className="flex flex-col items-center text-white/70">
                      <Upload size={24} className="text-orange-300 mb-2" />
                      <p className="text-sm font-medium mb-1">Click to upload a travel photo</p>
                      <p className="text-xs">JPG, PNG or GIF files</p>
                    </div>
                  )}
                </label>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-white/80 mb-2">
                  <MapPin size={16} className="text-orange-200" />
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where was this photo taken?"
                  className="w-full px-4 py-2 bg-red-900/20 rounded-md text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-white/80 mb-2">
                  <FileText size={16} className="text-orange-200" />
                  Travel Note
                </label>
                <textarea
                  value={travelNote}
                  onChange={(e) => setTravelNote(e.target.value)}
                  placeholder="Share your thoughts, feelings, or a brief moment..."
                  rows={4}
                  className="w-full px-4 py-2 bg-red-900/20 rounded-md text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-red-900/50 to-orange-700/50 hover:from-red-900/60 hover:to-orange-700/60 rounded-md text-white font-medium transition-colors border border-white/10"
              >
                <Sparkles size={16} />
                Generate AI Travel Story
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-orange-200 text-xl mb-6 font-mono flex items-center gap-2">
              <FileText size={16} />
              Your Travel Memories
            </h2>
            
            <div className="bg-red-900/30 backdrop-blur-md p-6 rounded-xl border border-white/10 h-[calc(100%-3rem)] flex items-center justify-center text-white/70 text-center">
              Your travel journal is empty. Add your first memory above!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoyageVibes;
