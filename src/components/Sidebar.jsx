
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, DollarSign, ShoppingCart, Youtube } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/route-animator", icon: BookOpen, label: "Route Animator" },
    { path: "/voyage-vibes", icon: DollarSign, label: "Voyage Vibes" },
    { path: "/shopping", icon: ShoppingCart, label: "Shopping" },
    { path: "/youtube", icon: Youtube, label: "Youtube" },
  ];

  return (
    <div className="w-16 bg-purple-900/80 backdrop-blur-md text-white flex flex-col items-center py-6 border-r border-white/10">
      <div className="font-mono text-xl font-bold mb-10 transform -rotate-90 origin-center whitespace-nowrap">
        CULTORIUM
      </div>
      
      <div className="flex flex-col items-center gap-8 mt-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-3 rounded-lg transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
