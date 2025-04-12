
import React, { useState } from "react";
import { MapPin, Plus } from "lucide-react";

const RouteAnimator = () => {
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [newStop, setNewStop] = useState("");

  const handleAddStop = () => {
    if (newStop.trim()) {
      setStops([...stops, newStop]);
      setNewStop("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Route details:", { startingPoint, destination, stops });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] rounded-xl overflow-hidden backdrop-blur-md bg-purple-900/20 border border-white/10">
      <div className="p-6 flex justify-between items-center">
        <div></div>
        <div className="font-mono text-3xl text-white/80">ROUTE ANIMATOR</div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-red-900/30 backdrop-blur-md p-8 rounded-xl border border-white/10 w-full max-w-md">
          <h2 className="text-orange-200 text-xl mb-6 font-mono">Route Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2">
                <MapPin size={16} className="text-orange-200" />
                Starting Point
              </label>
              <input
                type="text"
                value={startingPoint}
                onChange={(e) => setStartingPoint(e.target.value)}
                placeholder="Enter starting location"
                className="w-full px-4 py-2 bg-red-900/20 rounded-md text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2">
                <MapPin size={16} className="text-orange-200" />
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter final destination"
                className="w-full px-4 py-2 bg-red-900/20 rounded-md text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-white/80 mb-2">
                <MapPin size={16} className="text-orange-200" />
                Stops Along the Way
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newStop}
                  onChange={(e) => setNewStop(e.target.value)}
                  placeholder="Add a stop (optional)"
                  className="flex-1 px-4 py-2 bg-red-900/20 rounded-md text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="button"
                  onClick={handleAddStop}
                  className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              {stops.length > 0 && (
                <div className="mt-2 space-y-1">
                  {stops.map((stop, index) => (
                    <div key={index} className="px-3 py-1 bg-red-900/30 rounded text-white/80 text-sm">
                      {stop}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-900/50 to-orange-700/50 hover:from-red-900/60 hover:to-orange-700/60 rounded-md text-white font-medium transition-colors border border-white/10"
            >
              Continue to Transport Selection
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RouteAnimator;
