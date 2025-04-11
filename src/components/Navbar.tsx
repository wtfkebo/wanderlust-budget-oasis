
import React from 'react';
import { Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Compass className="h-7 w-7 text-teal" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent">
            WanderBudget
          </h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="text-navy hover:text-teal transition-colors">Home</a></li>
            <li><a href="#destinations" className="text-navy hover:text-teal transition-colors">Destinations</a></li>
            <li><a href="#budget" className="text-navy hover:text-teal transition-colors">Budget Planner</a></li>
            <li><a href="#tips" className="text-navy hover:text-teal transition-colors">Travel Tips</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
