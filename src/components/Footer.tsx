
import React from 'react';
import { Compass, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-teal" />
              <h2 className="text-xl font-bold">WanderBudget</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Plan your travel budget easily and discover what's possible with your money.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal">Home</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-teal">Destinations</a></li>
              <li><a href="#budget" className="text-gray-300 hover:text-teal">Budget Planner</a></li>
              <li><a href="#tips" className="text-gray-300 hover:text-teal">Travel Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal">Bali, Indonesia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal">Paris, France</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal">Bangkok, Thailand</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal">Rome, Italy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal">Tokyo, Japan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-teal" />
                <span className="text-gray-300">hello@wanderbudget.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-teal" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-teal" />
                <span className="text-gray-300">123 Travel Street, Wanderville</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WanderBudget. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
