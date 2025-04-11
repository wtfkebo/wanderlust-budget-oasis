
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/70" />
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 text-5xl font-bold leading-tight">
            Travel Smarter, Not Pricier
          </h1>
          <p className="mb-8 text-xl">
            Plan your perfect getaway with our budget-friendly travel planner. 
            Discover what you can do with the money you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#budget" 
              className="btn-primary text-center"
            >
              Plan Your Budget
            </a>
            <a 
              href="#destinations" 
              className="btn-secondary text-center"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <a href="#budget" className="text-white flex flex-col items-center">
          <span className="mb-2">Start Planning</span>
          <ArrowDownCircle className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
